// Debug version of scroll-to-top.js
// This version will make the button always visible for testing
(function() {
  // Ensure we can see debug messages in the console
  console.log('Scroll to top script loaded');
  
  // Function to create the button
  function createButton() {
    console.log('Creating scroll to top button');
    
    // Create button element
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.setAttribute('title', 'Scroll to top');
    
    // Create a visual CSS arrow instead of using Unicode character
    const arrowElement = document.createElement('span');
    arrowElement.className = 'scroll-top-arrow';
    
    // Add the arrow to the button
    scrollTopBtn.appendChild(arrowElement);
    scrollTopBtn.className = 'scroll-top-btn';
    
    // Add to the document
    document.body.appendChild(scrollTopBtn);
    
    // For debugging - always show the button
    scrollTopBtn.style.display = 'block';
    
    // Add a distinctive border for debugging
    scrollTopBtn.style.border = '2px solid red';
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
      console.log('Scroll to top button clicked');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    console.log('Scroll to top button created and visible');
    return scrollTopBtn;
  }

  // If DOM is already loaded, create button immediately
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    createButton();
  } else {
    // Otherwise wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', createButton);
  }
})();
