function pointAddEventListeners(point) {
  // Highlight the point on hover
  point.addEventListener('mouseover', () => {
    point.style.fill = 'orange';
  });

  // Remove highlight on mouseout
  point.addEventListener('mouseout', () => {
    point.style.fill = 'black';
  });

  // Add border and show coordinates on click
  point.addEventListener('click', () => {

    // Add coordinates to right column
    const coordinates = `(${point.cx.baseVal.value / 50 - 1}, ${10 - (point.cy.baseVal.value / 50)})`;
    document.getElementById('coordinates').textContent = `Last point clicked: ${coordinates}`;

    // If point already has border then remove it
    if (point.style.stroke) {
      point.style.stroke = '';
    } else {
      // Otherwise, add border
      point.style.stroke = 'green';
      point.style.strokeWidth = '5px';
    }
  });
}

// Get all elements with the class name "point"
const points = document.querySelectorAll('.point');

// Add event listeners to each point
points.forEach(point => pointAddEventListeners(point));

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    // Prevent the form from submitting via the browser
    event.preventDefault();

    // Get the x and y values from the form
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);

    // Create an SVG circle at the specified coordinates
    const svgns = 'http://www.w3.org/2000/svg';
    const circle = document.createElementNS(svgns, 'circle');
    circle.classList.add('point');
    circle.setAttribute('cx', (x + 1) * 50);
    circle.setAttribute('cy', (-y + 10) * 50);
    circle.setAttribute('r', '10');

    // Add event listeners to new point
    pointAddEventListeners(circle);

    // Add the point to the SVG element
    const svg = document.getElementById('svg');
    svg.appendChild(circle);
  });
});



