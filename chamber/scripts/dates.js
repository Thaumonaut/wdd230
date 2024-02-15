document.querySelector('.last-modified').textContent = document.lastModified;
document.querySelector(".year").textContent = new Date().getFullYear();

const banner = document.querySelector('.banner');
const bannerButton = document.querySelector('.banner button');
const date = new Date();


if (date.getDay() < 4 && date.getDay() > 0) {
    banner.classList.remove('hidden')
} else {
    banner.classList.add('hidden')
}

bannerButton.addEventListener('click', () => {
    banner.classList.add('hidden')
})