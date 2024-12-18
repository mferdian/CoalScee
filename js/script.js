// Toggle elements
const navbarNav = document.querySelector('.navbar-nav');
const shoppingCart = document.querySelector('.shopping-cart');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// Buttons
const menuBar = document.querySelector('#menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

// Menu Toggle
menuBar.onclick = () => {
    navbarNav.classList.toggle('active');
};

// Shopping Cart Toggle
shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Search Form Toggle
searchButton.onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Close menus when clicking outside
document.addEventListener('click', function (e) {
    // Close Navbar
    if (!menuBar.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    // Close Search Form
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    // Close Shopping Cart
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});



// modal box
document.addEventListener('DOMContentLoaded', () => {
    const itemDetailModal = document.getElementById('item-detail-modal');
    const itemDetailButtons = document.querySelectorAll('.item-detail-button');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Open modal
    itemDetailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            itemDetailModal.style.display = 'flex';
        });
    });

    // Close modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            itemDetailModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    itemDetailModal.addEventListener('click', (e) => {
        if (e.target === itemDetailModal) {
            itemDetailModal.style.display = 'none';
        }
    });
});