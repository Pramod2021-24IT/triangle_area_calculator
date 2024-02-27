function calculateArea() {
    // Get the input values
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    // Check if the triangle is valid using Triangle Inequality Theorem
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        // Calculate the semi-perimeter
        const s = (sideA + sideB + sideC) / 2;
        // Calculate the area using Heron's formula
        const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)).toFixed(2);
        // Display the area
        document.getElementById('result').innerText = `Area of the triangle: ${area}`;
    } else {
        // Display error message for invalid triangle
        document.getElementById('result').innerText = 'Invalid triangle. Please enter valid side lengths.';
    }
}

