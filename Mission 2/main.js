document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-button");
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
  
    const cart = [];
    let total = 0;
  
    addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const itemNumber = index + 1;
        addToCart(itemNumber);
      });
    });
  
    decreaseButtons.forEach(button => {
      button.addEventListener("click", function () {
        const quantityElement = this.parentNode.querySelector(".count");
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
          quantityElement.textContent = currentQuantity - 1;
        }
      });
    });
  
    increaseButtons.forEach(button => {
      button.addEventListener("click", function () {
        const quantityElement = this.parentNode.querySelector(".count");
        const currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
      });
    });
  
   function addToCart(itemNumber) {
  const itemName = "Nama Barang " + itemNumber;
  const itemPrice =
    itemNumber === 1 ? 100000 :
    itemNumber === 2 ? 150000 :
    itemNumber === 3 ? 75000 :
    itemNumber === 4 ? 300000 :
    itemNumber === 5 ? 125000 : 10000;

  const quantityElement = document.querySelector(`.item[data-item="${itemNumber}"] .count`);
  const quantity = parseInt(quantityElement.textContent);

  if (quantity > 0) {
    const totalPrice = itemPrice * quantity;
    cart.push({ name: itemName, price: itemPrice, quantity: quantity, totalPrice: totalPrice });
    total += totalPrice;

    updateCart();
  }
}
  

function updateCart() {
    cartItemsElement.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.innerText = `${item.name} x ${item.quantity} pcs - Rp. ${item.totalPrice}`;
      cartItemsElement.appendChild(li);
    });
  
    const tax = total * 0.11; // Perhitungan pajak 11%
    const totalWithTax = total + tax;
  
    totalElement.innerHTML = `Total = Rp. ${total.toFixed(2)}<br>Pajak 11% = Rp. ${tax.toFixed(2)}<br>Total Biaya = Rp. ${totalWithTax.toFixed(2)}`;
  }
  
  });
  