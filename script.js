

stock = document.getElementById("stock");
out_of_stock = document.getElementById("out_of_stock");

stock_status = prompt("Input 1 for Available and 0 for not available")

if (stock_status === '1'){
    out_of_stock.style.display = 'none'
}
else{
    stock.style.display = 'none'
}


let decrementButton = document.getElementById('decrement');
let incrementButton = document.getElementById('increment');
let quantityDisplay = document.getElementById('quantity');

decrementButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityDisplay.innerText);
  if (currentQuantity > 1) {
    quantityDisplay.innerText = --currentQuantity;
  }
});

incrementButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityDisplay.innerText);
  quantityDisplay.innerText = ++currentQuantity;
});