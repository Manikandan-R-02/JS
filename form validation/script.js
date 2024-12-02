const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
    if (!validateInputs()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateInputs() {
    let success = true; // Reinitialize success for each validation
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // Validate Username
    if (usernameVal === '') {
        success = false;
        seterror(username, 'Username is required');
    } else {
        setsuccess(username);
    }

    // Validate Email
    if (emailVal === '') {
        success = false;
        seterror(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        seterror(email, 'Please enter a valid email');
    } else {
        setsuccess(email);
    }

    // Validate Password
    if (passwordVal === '') {
        success = false;
        seterror(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        success = false;
        seterror(password, 'Password must contain at least 8 characters');
    } else {
        setsuccess(password);
    }

    // Validate Confirm Password
    if (cpasswordVal === '') {
        success = false;
        seterror(cpassword, 'Please confirm your password');
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        seterror(cpassword, `Password doesn't match`);
    } else {
        setsuccess(cpassword);
    }

    return success;
}

function seterror(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message; // Set the error message
    inputGroup.classList.add('input-group-error');
    inputGroup.classList.remove('input-group-success');
}

function setsuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = ''; // Clear any error message
    inputGroup.classList.add('input-group-success');
    inputGroup.classList.remove('input-group-error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};