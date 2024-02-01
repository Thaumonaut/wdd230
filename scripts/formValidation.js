const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const message = document.querySelector('#password-error-message')

const slider = document.querySelector('#rating');
const rateText = document.querySelector("#rating-value");

slider.defaultValue = 1;

pass2.addEventListener('input', CheckPassword)
pass2.addEventListener('focusout', () => {
    if(pass1.value !== pass2.value) {
        pass1.value = '';
        pass2.value = '';
    }
})

function CheckPassword() {
    if(pass1.value == pass2.value) {
        message.classList.remove('warning')
        pass1.classList.remove('invalid')
        pass2.classList.remove('invalid')
        message.textContent = '';
        return
    }
    
    message.classList.add('warning')
    pass1.classList.add('invalid')
    pass2.classList.add('invalid')
    message.textContent = 'ERROR: Passwords do not match!'
}

slider.addEventListener('input', () => {
    rateText.textContent = slider.value
})