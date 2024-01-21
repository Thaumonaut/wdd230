const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuButton.textContent = "×"
    } else {
        menuButton.textContent = "≡"
    }
})