// SIGN UP FORM VALIDATION
const form = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = confirmPasswordMatch();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        console.log('is valid')
    }
});

// utility funcitons for form validation
const isRequired = value => value === '' ? false : true;

const checkLength = (len, min, max) => len < min || len > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

// functions for error or success
const displayError = (input, message) => {
    const formGroup = input.parentElement;

    formGroup.classList.add('error');

    const error = formGroup.querySelector('small');
    error.textContent = message;
}

const displaySuccess = (input) => {
    const formGroup = input.parentElement;

    formGroup.classList.remove('error');

    const error = formGroup.querySelector('small');
    error.textContent = '';
}

//functions for input field validation
const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        displayError(usernameEl, 'Username cannot be blank.');
    } else if (!checkLength(username.length, min, max)) {
        displayError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        displaySuccess(usernameEl);
        valid = true;
    }

    return valid;  
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        displayError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        displayError(emailEl, 'Email is not valid.')
    } else {
        displaySuccess(emailEl);
        valid = true;
    }
    return valid;   
}

const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        displayError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        displayError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        displaySuccess(passwordEl);
        valid = true;
    }

    return valid;   
}

const confirmPasswordMatch = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        displayError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        displayError(confirmPasswordEl, 'Passwords does not match');
    } else {
        displaySuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;   
}