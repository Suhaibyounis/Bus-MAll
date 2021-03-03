/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const clearItemData = document.getElementsByTagName( 'tbody' )[0];
  clearItemData.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  for ( let i = 0; i < cart.items.length; i++ ) {
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
    const tr = document.createElement( 'tr' );
    // TODO: Create a TD for the delete link, quantity,  and the item
    const deleteLink = document.createElement( 'a' );
    const quantity = document.createElement( 'td' );
    const itemElement = document.createElement( 'td' );
    const deletedLink = document.createElement( 'td' );
    deleteLink.textContent = 'X';
    deleteLink.setAttribute( 'href', '#' );
    deleteLink.setAttribute( 'abbr', cart.items[i].product );
    quantity.textContent = cart.items[i].quantity;
    itemElement.textContent = cart.items[i].product;
    deletedLink.appendChild( deleteLink );
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild( deletedLink );
    tr.appendChild( quantity );
    tr.appendChild( itemElement );
    table.appendChild( tr );

  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  for ( let i = 0; i < cart.items.length; i++ ) {
    console.log( event.target.abbr, cart.items[i].product );
    let abbr = event.target.getAttribute( 'abbr' );
    if ( abbr === cart.items[i].product ) {
      cart.removeItem( i );
    }
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table

    renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
