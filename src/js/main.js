// JS function to make element follow mouse movement

// Get element from DOM by id
const mouseFollow = document.getElementById('mouseFollow');

// Add event listener on mouse move
document.addEventListener('mousemove', (e) => {

  // Get the position of the mouse in the viewport and add those positions to 
  // the mouseFollow element.
  // This can be seen when you inspect the Html element in the browser.
  mouseFollow.style.cssText = `
    left: ${e.clientX + 20}px;
    top:  ${e.clientY + 20}px;
  `;
});