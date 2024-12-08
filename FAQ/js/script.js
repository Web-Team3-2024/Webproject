

//function called by clicling button element.onclick-event handler.bookNow()


function bookNow(bookTour){


    // bookTour (String) parameter created to execute all bookings in one function.


    if(bookTour==='loughGillBreweryTour'){//if statement
        window.location.href='https://loughgillbrewery.com/pages/brewery-tours';//brewery page
    } 
    else if(bookTour==='ancientLandscapes'){
        window.location.href='https://www.sligo.ie/visit/ancient-landscapes/';//ancient landscapes page
    } 
    else if(bookTour==='sligoSurfExperience'){
        window.location.href='https://www.sligosurfexperience.com/';//surfing page
    } 

}

function goToCart(){
    window.location.href='../sligo.html'; // back to Sligo page
}



// Navbar transparency on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust if needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});





















//https://www.w3schools.com/w3css/w3css_slideshow.asp
//carousel use


var myIndex=0;
carousel();
function carousel(){
  var i;
  var x=document.getElementsByClassName("mySlides");
  for(i=0;i<x.length;i++){
    x[i].style.display="none";  
  }
  myIndex++;
  if(myIndex>x.length){myIndex=1}    
  x[myIndex-1].style.display="block";  
  setTimeout(carousel,5000);    
}
