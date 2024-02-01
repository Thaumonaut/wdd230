const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        menuButton.textContent = "×"
    } else {
        menuButton.textContent = "≡"
    }
})