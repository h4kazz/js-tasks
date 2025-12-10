"use strict";
const prompt = require("prompt-sync")();

const translateLanguage = (language) => {
  switch(language) {
    case 'en':
        return 'Hello';
    case 'lt':
        return 'Labas';
    case 'fr':
        return 'Bonjour';
    case 'es':
        return 'Hola'
    default:
        return 'Language not supported.'
  }
}

console.log(translateLanguage('en'));
