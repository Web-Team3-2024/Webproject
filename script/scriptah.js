function validateform() {
  const firstname=document.forms["contact"]["firstname"].value;
  const surname=document.forms["contact"]["surname"].value;
  const email=document.forms["contact"]["email"].value;
  const message=document.forms["contact"]["message"].value;
 
  if (!firstName || !lastName || !email || !message) {
    alert("All fields are required. Please complete the form.");
  } else {
    alert("Form submitted successfully!");
    // You can process the data or send it to a server here
    console.log({ firstName, lastName, email, message });
  }
}
form = document.querySelector('form');
input = document.querySelector('input');

form.addEventListener('submit', function(event) {
  if (input.value == '') {
    event.preventDefault(); // prevent the form from submitting
  }      
});
//addedcode
JavaScript for navbar:
// Navbar transparency on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust if needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }