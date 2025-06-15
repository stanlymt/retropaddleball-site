// Optimized Tawk.to chat widget loader
(function() {
  // Avoid duplicate loads
  if (window.tawkToScriptLoaded) return;
  window.tawkToScriptLoaded = true;
  
  // We'll use a loading timeout to cancel loading if it takes too long
  let loadingTimeout;
  
  try {
    // Set up Tawk API - must be done before loading the script
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    // Add error handlers to prevent console pollution
    window.Tawk_API.onError = function(error) {
      console.log('Tawk.to handled error:', error);
      return false; // Don't propagate errors
    };
    
    // Set status callbacks to track loading
    window.Tawk_API.onLoad = function() {
      if (loadingTimeout) clearTimeout(loadingTimeout);
      console.log('Tawk.to chat loaded successfully');
    };
    
    // Create script element with a timeout
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/684d997ca3ad3e1910ba115e/1itnhv3he';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Error handling for script loading
    script.onerror = function(error) {
      console.warn('Error loading Tawk.to chat widget:', error);
      if (script.parentNode) script.parentNode.removeChild(script);
      if (loadingTimeout) clearTimeout(loadingTimeout);
    };
    
    // Set timeout to remove script if it doesn't load in 10 seconds
    loadingTimeout = setTimeout(function() {
      console.warn('Tawk.to chat widget load timed out');
      if (script.parentNode) script.parentNode.removeChild(script);
    }, 10000);
    
    // Append to body
    document.body.appendChild(script);
  } catch(e) {
    console.error('Failed to initialize Tawk.to chat widget:', e);
  }
})();
