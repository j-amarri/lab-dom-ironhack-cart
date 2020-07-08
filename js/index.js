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
  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  // target will "target" the button itself
  const target = event.currentTarget.parentNode.parentNode;
  const parentTarget = target.parentNode;
  console.log('The target in remove is:', target);
  parentTarget.removeChild(target);
  return calculateAll() - updateSubtotal(event);
}

// ITERATION 5

function createProduct() {
  const createProductBtnElement = document.getElementById('create');
  createProductBtnElement.addEventListener('click', createProduct);
  console.dir(createProductBtnElement);
  /*   const productNameElement = document.querySelector('.create-product input');
  console.log(productNameElement); */
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removePricesBtnElements = document.getElementsByClassName('btn-remove');
  for (const element of removePricesBtnElements) {
    element.addEventListener('click', removeProduct);
  }
});
