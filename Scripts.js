// Live clock function
function updateClock() {
    const clock = document.getElementById('clock');  // Select the clock element
    const now = new Date();  // Get the current date and time

    // Get hours, minutes, and seconds, ensuring two digits
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update the clock display
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second using setInterval
setInterval(updateClock, 1000);  // Calls updateClock every 1000 milliseconds (1 second)

// Image slider functionality
let currentSlide = 0;  // Track the current slide index
const slides = document.querySelectorAll('.slide');  // Select all the slides

// Function to change slide based on direction
function changeSlide(direction) {
    // Remove active class from the current slide
    slides[currentSlide].classList.remove('active');

    // Calculate the next slide index, wrapping around if necessary
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    // Add active class to the new slide
    slides[currentSlide].classList.add('active');
}

function toggleAnswer(element) {
    const answer = element.nextElementSibling;  // Get the next sibling element (the answer)
    const isVisible = answer.style.display === 'block';  // Check if the answer is currently visible

    // Toggle between showing and hiding the answer
    answer.style.display = isVisible ? 'none' : 'block';

    // Update the aria-expanded attribute for accessibility
    element.setAttribute('aria-expanded', !isVisible);
}
