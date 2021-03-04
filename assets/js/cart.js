/* global Cart */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;
function loadCart() {
  let cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const clear = document.getElementsByTagName( 'tbody' )[0];
  console.log( clear );
  clear.innerHTML = '';
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let tbody = document.getElementsByTagName( 'tbody' )[0];
  for ( let i = 0; i < cart.items.length; i++ ) {
    const tr = document.createElement( 'tr' );
    const deleLink = document.createElement( 'a' );
    const quantity = document.createElement( 'td' );
    const itemEle = document.createElement( 'td' );
    const delLink = document.createElement( 'td' );
    const imgItem = document.createElement( 'td' );
    // delete link is just an "x" with an anchor tag around it
    deleLink.textContent = 'X';
    deleLink.setAttribute( 'href', '#' );
    deleLink.setAttribute( 'delete', i );
    // quanitity comes from this.quantity = quantity;
    // item comes from this.name = name;
    quantity.textContent = cart.items[i].quantity;
    itemEle.textContent = cart.items[i].product.name;
    quantity.textContent = cart.items[i].quantity;
    imgItem.innerHTML = `<img src='${cart.items[i].product.filePath}'/>`;
    console.log( cart.items[i] );
    delLink.appendChild( deleLink );
    tr.appendChild( delLink );
    tr.appendChild( quantity );
    tr.appendChild( itemEle );
    tr.appendChild( imgItem );
    tbody.appendChild( tr );
  }
}
// TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
// TODO: Save the cart back to local storage
// TODO: Re-draw the cart table
function removeItemFromCart( event ) {
  console.log( event.target.getAttribute( 'delete' ) );
  if( event.target.getAttribute( 'delete' ) ){
    let i = event.target.getAttribute( 'delete' );
    cart.removeItem( Number( i ) );
    cart.saveToLocalStorage();
    renderCart();
  }
}
// This will initialize the page and draw the cart on screen
renderCart();