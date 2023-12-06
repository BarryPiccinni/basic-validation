'use strict';
const validator = require('./index');

test('Should return false if the input has less than 8 characters', () =>{
    const shortPassword = 'Ab3_';

    const actual = validator(shortPassword);

    expect(actual).toBe(false);
});

test('Should return false if the input doesnt have a capital letter', () =>{
    const noCapitalPassword = 'abcdefgh1_';

    const actual = validator(noCapitalPassword);

    expect(actual).toBe(false);
});

test('Should return false if the input doesnt contain a lower case letter', () =>{
    const allCapitalPassword = 'ABCDEFGH1_';

    const actual = validator(allCapitalPassword);

    expect(actual).toBe(false);
});

test('Should return false if the input doesnt contain a number', () =>{
    const noNumberPassword = 'Abcdefgh_';

    const actual = validator(noNumberPassword);

    expect(actual).toBe(false);
});

test('Should return false if the input doesnt contain an underscore', () =>{
    const noUnderscorePassword = 'Abcdefgh1';

    const actual = validator(noUnderscorePassword);

    expect(actual).toBe(false);
});

test('Should return true if the input is valid', () =>{
    const validPassword = 'Abcdefgh1_';

    const actual = validator(validPassword);

    expect(actual).toBe(true);
});