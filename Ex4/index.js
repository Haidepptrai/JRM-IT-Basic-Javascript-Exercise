const passwordOutput = document.querySelector('#password-output');
const lengthInput = document.querySelector('#length-input');
const uppercaseInput = document.querySelector('#uppercase-input');
const lowercaseInput = document.querySelector('#lowercase-input');
const numbersInput = document.querySelector('#numbers-input');
const symbolsInput = document.querySelector('#symbols-input');
const generateButton = document.querySelector('#generate-btn');

const getRandomLower = () => {
    // TODO: Generate a random lowercase letter
};

const getRandomUpper = () => {
    // TODO: Generate a random uppercase letter
};

const getRandomNumber = () => {
    // TODO: Generate a random number
};

const getRandomSymbol = () => {
    // TODO: Generate a random symbol
};

const generatePassword = () => {
    // TODO: Generate a password based on user input
    // Validate the password length and character type selection
    // Generate the password using selected character types
    // Update the password output element with the generated password
};

generateButton.addEventListener('click', generatePassword);
