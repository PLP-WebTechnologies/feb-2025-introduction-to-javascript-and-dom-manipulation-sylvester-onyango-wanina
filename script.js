// Change text content dynamically
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('text-change').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('change-style-button').addEventListener('click', function() {
    const paragraph = document.getElementById('style-change');
    paragraph.style.fontSize = "24px";
    paragraph.style.color = "blue";
    paragraph.style.fontWeight = "bold";
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-element-button').addEventListener('click', function() {
    const dynamicDiv = document.getElementById('dynamic-elements');

    // Check if the element already exists
    const existingElement = document.getElementById('new-element');
    if (existingElement) {
        dynamicDiv.removeChild(existingElement);  // Remove element
    } else {
        const newElement = document.createElement('p');  // Create a new element
        newElement.id = 'new-element';
        newElement.textContent = 'This is a dynamically added element!';
        dynamicDiv.appendChild(newElement);  // Append the new element
    }
});
