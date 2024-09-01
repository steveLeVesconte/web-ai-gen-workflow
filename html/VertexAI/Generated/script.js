const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeButton = document.createElement('button');

closeButton.innerHTML = 'X';
closeButton.classList.add('close-button');
navLinks.appendChild(closeButton);
closeButton.style.display = 'none'; // Initially hide the close button

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    closeButton.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
});

closeButton.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeButton.style.display = 'none';
});

navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('show');
        closeButton.style.display = 'none';
    }
});

// Handle resizing and hide mobile menu if needed
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        closeButton.style.display = 'none';
    }
});