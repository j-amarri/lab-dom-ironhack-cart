// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const priceValue = parseFloat(priceElement.innerHTML);
  const quantityValue = parseFloat(quantityElement.value);
  const subtotalPrice = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalPrice;
  return subtotalPrice;
}

// what is parameter 'product'? single <tr> element with a product class

function calculateAll() {
  // ITERATION 2
  const productsElements = document.querySelectorAll('.product');
  let totalPrice = 0;
  for (const element of productsElements) {
    totalPrice += updateSubtotal(element);
  }
  // ITERATION 3
  const totalPriceElement = document.getElementById('total-value');
  totalPriceElement.innerHTML = `Total: $ ${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.dir(target);
  console.log('The target in remove is:', target);
  const parentNode = target.parentNode.parentNode;
  console.dir(parentNode);
  parentNode.removeChild(event);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removePricesBtnElements = document.getElementsByClassName('btn-remove');
  for (const element of removePricesBtnElements) {
    element.addEventListener('click', removeProduct);
  }
});
