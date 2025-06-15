// Global error handler for promise rejections and errors
(function() {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    // Common third-party errors to suppress
    const ignoredErrors = [
      'message channel closed',
      'listener indicated',
      'vendor.js'
    ];
    
    // Check if error should be suppressed
    if (event.reason && event.reason.message) {
      const errorMsg = event.reason.message.toLowerCase();
      const errorStack = event.reason.stack ? event.reason.stack.toLowerCase() : '';
      
      // Check against ignored error patterns
      if (ignoredErrors.some(pattern => 
          errorMsg.includes(pattern.toLowerCase()) || 
          errorStack.includes(pattern.toLowerCase()))) {
        
        // Prevent the error from bubbling up
        event.preventDefault();
        event.stopPropagation();
        
        // Log for debugging but not in production
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.log('Prevented unhandled promise rejection:', event.reason.message);
        }
        
        return false;
      }
    }
  });
  
  // Global error tracking - only log critical errors
  window.addEventListener('error', function(event) {
    // Don't log resource loading errors for analytics or third-party scripts
    if (event.target && (event.target.src || event.target.href)) {
      const url = event.target.src || event.target.href;
      // Ignore errors from common third-party domains
      if (url.includes('cloudflareinsights') || 
          url.includes('tawk.to') || 
          url.includes('analytics') || 
          url.includes('tracker')) {
        event.preventDefault();
        return false;
      }
    }
  }, true); // Capture phase
})();
