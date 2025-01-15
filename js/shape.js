ctx.beginPath();  // Start a new path
ctx.arc(250, 250, 50, 0, Math.PI * 2);  // Draw circle: x, y, radius, start angle, end angle
ctx.fillStyle = 'red';  // Set color
ctx.fill();  // Fill the circle
ctx.closePath();  // Close the path
