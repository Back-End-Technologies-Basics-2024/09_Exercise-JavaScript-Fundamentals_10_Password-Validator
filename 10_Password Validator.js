function passwordValidator(password) {
    'use strict';

    // Check the length
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    // Check if it consists only of letters and digits
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
    }

    // Check if it has at least 2 digits
    let digitCount = 0;
    for (let char of password) {
        if (char >= '0' && char <= '9') {
            digitCount++;
        }
    }

    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }

    // If all checks pass, the password is valid
    if (
        (password.length >= 6 && password.length <= 10) &&
        /^[a-zA-Z0-9]+$/.test(password) &&
        digitCount >= 2
    ) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn')