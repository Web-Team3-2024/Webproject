 
 //Function for map and carouser, activated on page load
document.addEventListener("DOMContentLoaded", function () {
    // Get carousel and map container elements
    var secondCarousel = document.getElementById('mapCarousel'); // Carousel element
    var mapContainer = document.getElementById("map");

    // Initialize Bootstrap 5 Carousel (with no auto-sliding)
    var carousel = new bootstrap.Carousel(secondCarousel, {
        interval: false, // Ensure no auto-scrolling
        ride: false // Ensure the carousel does not auto-start sliding
    });

    // Example marker data with coordinates as percentages
    var locations = [
        { name: "Dingle Peninsula", x: 29, y: 81, slideIndex: 0 }, // Percentages: 30% from left, 81% from top
        { name: "Slide 2", x: 45, y: 35, slideIndex: 1 }  // Percentages: 45% from left, 35% from top
    ];

    // Add markers and bind click events to navigate carousel
    locations.forEach(function (location) {
        var marker = document.createElement("div");
        marker.className = "marker";
        marker.title = location.name; // Tooltip for the marker
        marker.style.position = "absolute";
        marker.style.left = location.x + "%"; // Use percentage for horizontal position
        marker.style.top = location.y + "%";  // Use percentage for vertical position

        // Attach a click event to each marker
        marker.addEventListener("click", function () {
            carousel.to(location.slideIndex); // Navigate to respective slide
        });

        // Append the marker to the map container
        mapContainer.appendChild(marker);
    });
});


 

// Navbar transparency on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
