//function is called by clicling a button element.onclick-event handler.bookNow()
function bookNow(bookTour){
    //Instead of writing "bookAquarium,bookDistillery,bookCrystal"a bookTour (String) as a parameter was created
    //to handle all bookings in one function.
    if(bookTour==='distillery'){//if conditional statement
        window.location.href='bookings/distillery.html';//distillery page
    } 
    else if(bookTour==='crystal'){
        window.location.href='bookings/crystal.html';//crystal page
    } 
    else if(bookTour==='aquarium'){
        window.location.href='bookings/aquarium.html';//aquarium page
    } 
}
function addToCart(){
    window.location.href='../dingle.html';//back to dingle page,later put the direction to the cart
}
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