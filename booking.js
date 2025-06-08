
function updateTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-items li');
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent);
        total += price;
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function addToCart(name, price) {
    const cartItems = document.querySelector('.cart-items');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <h4>${name}</h4>
        <p class="item-price">${price}</p>
    `;
    cartItems.appendChild(cartItem);
    updateTotal();
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        addToCart(name, price);
    });
});
