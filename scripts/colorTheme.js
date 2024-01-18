const html = document.querySelector('html')
const themeButton = document.querySelector("#theme");
const text = themeButton.querySelector("p");
setThemeText();

themeButton.addEventListener("click", () => {
    if(html.getAttribute('data-theme') == "dark") {
        html.setAttribute('data-theme', 'light')
    } else {
        html.setAttribute('data-theme', 'dark')
    }

    setThemeText()
})

function setThemeText() {
    if(html.getAttribute('data-theme') == "dark") {
        text.textContent = '☀️'
    } else {
        text.textContent = '🌒'
    }
}
