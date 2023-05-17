const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

function search_products() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('name');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
  const button = event.target;
  const item = button.parentElement;
  const name = item.querySelector('.name').textContent;
  const price = item.querySelector('.price').textContent;
  addItemToCart(name, price);
}

function addItemToCart(name, price) {
  const cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  const cartItems = document.querySelector('.cart-items');
  const cartItemNames = cartItems.querySelectorAll('.cart-item-name');
  for (let i = 0; i < cartItemNames.length; i++) {
	if (cartItemNames[i].textContent === name) {
	  alert('This item is already added to the cart');
	  return;
	}
  }
  const cartRowContents = `
	<div class="cart-item">
	  <span class="cart-item-name">${name}</span>
	  <span class="cart-item-price">${price}</span>
	</div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  updateCartTotal();
}

function updateCartTotal() {
	const cartItemPrices = document.querySelectorAll('.cart-item-price');
	let total = 0;
	for (let i = 0; i < cartItemPrices.length; i++) {
	  const priceText = cartItemPrices[i].textContent;
	  const price = parseFloat(priceText.substring(1));
	  if (!isNaN(price)) {
		total += price;
	  }
	}
	total = Math.round(total * 100) / 100;
	const cartTotalPrice = document.querySelector('.cart-total-price');
	cartTotalPrice.textContent = '₱' + total.toFixed(2);
  }
  
  function removeItemFromCart(event) {
	if (event.target.classList.contains('remove-item')) {
	  const cartItem = event.target.parentElement;
	  const itemPrice = parseFloat(cartItem.children[1].textContent);
	  
	  // Remove the cart item
	  cartItem.remove();
  
	  // Update the total price
	  const totalPrice = parseFloat(cartTotalPrice.textContent);
	  cartTotalPrice.textContent = totalPrice - itemPrice;
	}
  }
  
  
  // Event listener for removing an item from the cart
  // Call the removeItemFromCart function
  cartItemsContainer.addEventListener('click', removeItemFromCart);


  const backToTopBtn = document.getElementById("backToTop");

  // Function to scroll back to top
  function scrollToTop() {
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
	document.body.scrollTop = 0; // For Safari
  }

  // Event listener to trigger scroll to top function
  backToTopBtn.addEventListener("click", scrollToTop);

  