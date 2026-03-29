let cartItems = 0;

const cartAddBtn = document.getElementById('cartAdd');
const checkoutBtn = document.getElementById('checkout');
const doubleAddBtn = document.getElementById('doubleAdd');
const cartItemsDisplay = document.querySelector('p');

document.querySelector('#itemAmtDisp').innerText = `The Cart has ${cartItems} items`;

document.querySelector('#cartAdd').addEventListener('click', () => {
    cartItems++;
    document.querySelector('#itemAmtDisp').innerText = `The Cart has ${cartItems} items`;
});

document.querySelector('#checkout').addEventListener('click', () => {
    cartItems = 0;
    alert('Checked out successfully!');
    document.querySelector('#itemAmtDisp').innerText = `The Cart has ${cartItems} items`;
});

document.querySelector('#doubleAdd').addEventListener('click', () => {
    cartItems += 2;
    document.querySelector('#itemAmtDisp').innerText = `The Cart has ${cartItems} items`;
});