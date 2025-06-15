// Optimized scroll to top button functionality
(function() {
  // Create the button when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (!scrollTopBtn) return; // Safety check
    
    // Initial button state
    updateButtonVisibility();
    
    // Optimized scroll event handling with requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateButtonVisibility();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true }); // Use passive listener for better performance
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
    
    // Helper function to update button visibility
    function updateButtonVisibility() {
      const scrollY = window.scrollY || window.pageYOffset;
      scrollTopBtn.style.display = scrollY > 300 ? 'flex' : 'none';
    }
  });
})();
