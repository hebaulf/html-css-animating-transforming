const mouseFollow = document.getElementById('mouseFollow');

document.addEventListener('mousemove', (e) => {
  mouseFollow.style.cssText = `
    left: ${e.clientX + 20}px;
    top:  ${e.clientY + 20}px;
  `;
});