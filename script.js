// let navbar = document.querySelectorAll('.navbar');
// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }
// let searchForm = document.querySelectorAll('.search-form');
// document.querySelector('#search-btn').onclick = () => {
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelectorAll('.cart-items-container');
// document.querySelector('#cart-btn').onclick = () => {
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }


// window.onscroll = () => {
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');

// }

let openShopping = document.querySelector('.icons');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})