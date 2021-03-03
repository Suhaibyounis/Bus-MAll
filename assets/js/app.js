'use strict';
// Cart constructor.
const Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  const newItem = new CartItem(product, quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!

  this.items.splice(item, 1);
};

const CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/img/bag.jpg', 'Bag');
  new Product('assets/img/banana.jpg', 'Banana');
  new Product('assets/img/bathroom.jpg', 'Bathroom');
  new Product('assets/img/boots.jpg', 'Boots');
  new Product('assets/img/breakfast.jpg', 'Breakfast');
  new Product('assets/img/bubblegum.jpg', 'Bubblegum');
  new Product('assets/img/chair.jpg', 'Chair');
  new Product('assets/img/cthulhu.jpg', 'Cthulhu');
  new Product('assets/img/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/img/dragon.jpg', 'Dragon');
  new Product('assets/img/pen.jpg', 'Pen');
  new Product('assets/img/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/img/scissors.jpg', 'Scissors');
  new Product('assets/img/shark.jpg', 'Shark');
  new Product('assets/img/sweep.png', 'Sweep');
  new Product('assets/img/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/img/unicorn.jpg', 'Unicorn');
  new Product('assets/img/usb.gif', 'USB');
  new Product('assets/img/water-can.jpg', 'Water Can');
  new Product('assets/img/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
