'use strict';

function validate(input){
    // Regex conditions
    // - Must contain at least 8 characters
    // - Must contain upper case character
    // - Must contain lower case character
    // - Must contain a number
    // - Must contain an underscore
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[_])[A-Za-z\\d_]{8,}$");

    // return true if input matches regex
    return regex.test(input);
}

module.exports = validate;