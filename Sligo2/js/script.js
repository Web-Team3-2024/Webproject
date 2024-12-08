

document.addEventListener('DOMContentLoaded', function() {

    const faqItems = document.querySelectorAll('.faq-item h3'); // Selects all FAQ question elements

    faqItems.forEach(item => {

        item.addEventListener('click', () => {

            const content = item.nextElementSibling; // Selects the corresponding answer element

            content.style.display = content.style.display === 'block' ? 'none' : 'block';  // Toggles the display of the answer
        });
    });
});


// Navbar transparency on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust if needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
















