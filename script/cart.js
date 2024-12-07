// Initialize an empty cart or load from localStorage
var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(id, name, price, photo, description) {
  var found = false;

  // Check if the item already exists in the cart
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity += 1; // Increase quantity if found
      found = true;
      break;
    }
  }

  // If item not found, add it as a new entry
  if (!found) {
    cart.push({
      id: id,
      name: name,
      price: parseFloat(price), // Ensure price is a number
      quantity: 1,
      image: photo,
      description: description || "No description available", // Default description
    });
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Notify the user
  alert(name + " has been added to the cart!");
  
  // Update the cart display
  displayCart();
  getItemsNumber();
}

// Function to display the cart
function displayCart() {
  var cartContent = document.querySelector(".card-body"); // Container for cart items
  var cartFooter = document.querySelector(".card-footer"); // Container for cart footer
  var cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage

  // Clear the current content
  cartContent.innerHTML = "";
  cartFooter.innerHTML = "";

  // If the cart is empty, display a message and update the count to 0
  if (cart.length === 0) {
    cartContent.innerHTML = "<p>Your cart is empty.</p>";
    updateCartCount(0);
    return;
  }

  var totalSum = 0; // Initialize total price
  var totalItems = 0; // Initialize total item count

  // Loop through cart items
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    totalSum += item.price * item.quantity; // Calculate total price
    totalItems += item.quantity; // Calculate total items

    // Add each item's HTML to the cart content
    cartContent.innerHTML +=
      "<div class='row align-items-center mb-3'>" +
        "<div class='col-2'>" +
          "<img src='" + (item.image || "http://placehold.it/100x70") + "' class='img-fluid' alt='Product'>" +
        "</div>" +
        "<div class='col-4'>" +
          "<h6><strong>" + item.name + "</strong></h6>" +
          "<small>" + (item.description || "") + "</small>" +
        "</div>" +
        "<div class='col-6 d-flex align-items-center'>" +
          "<div class='me-auto'>" +
            "<h6><strong>€" + item.price.toFixed(2) + "</strong> <span class='text-muted'>x</span></h6>" +
          "</div>" +
          "<input type='number' class='form-control form-control-sm me-3' style='width: 60px;' value='" + item.quantity + "' min='1' " +
          "onchange='updateQuantity(" + i + ", this.value)'>" +
          "<button class='btn btn-link text-danger' onclick='removeFromCart(" + i + ")'>" +
            "<i class='bi bi-trash'></i>" +
          "</button>" +
        "</div>" +
      "</div>" +
      "<hr>";
  }

  // Add the cart footer with the total price and checkout button
  cartFooter.innerHTML =
    "<div class='row align-items-center'>" +
      "<div class='col-9 text-end'>" +
        "<h5>Total: <strong>€" + totalSum.toFixed(2) + "</strong></h5>" +
      "</div>" +
      "<div class='col-3'>" +
        "<button class='btn btn-success btn-block'>Checkout</button>" +
      "</div>" +
    "</div>";

  // Update the cart count in the navbar
  updateCartCount(totalItems);
}

// Function to update the cart count in the navbar
function updateCartCount(count) {
  var itemsElement = document.getElementById("items"); // Get the cart count element
  itemsElement.textContent = count; // Update the displayed count
}

// Function to update the quantity of an item in the cart
function updateQuantity(index, newQuantity) {
  var cart = JSON.parse(localStorage.getItem("cart")) || []; // Load the cart
  if (newQuantity > 0) {
    cart[index].quantity = parseInt(newQuantity); // Update the item's quantity
    localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart
    displayCart(); // Refresh the cart display
  }
}

// Function to remove an item from the cart
function removeFromCart(index) {
  var cart = JSON.parse(localStorage.getItem("cart")) || []; // Load the cart
  cart.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart
  displayCart(); // Refresh the cart display
}

function getItemsNumber(){
	
    // Load cart from localStorage and update the item count
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var totalItems = 0;

    // Calculate total items in the cart
    for (var i = 0; i < cart.length; i++) {
      totalItems += cart[i].quantity;
    }

    // Update the navbar item count
    updateCartCount(totalItems);
  
}
