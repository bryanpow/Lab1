//imports
const prompt = require('prompt-sync')({signit : true})
//notes
/*
Log a generic welcome 
Get a user's name via prompt
Greet the user with their name
Return the user's name
*/
//Small code 
const sayGoodbye = (name) => {
    console.log(`Goodbye ${name}!`)
}
const showOptions = () => {
    console.log ('Here are your options:\n1 - Play a guessing game\n2 - Words of wisdom\n3 - Cheer you on\nAny other number - Exit\n');
} 
const getUserNumber = () => {
   let number = prompt('Enter A Key :');
   number = parceFloat(number);
   return number
}
const getRandomNum = (min,max) => {
    const randomNum = Math.random;
    const result = Math.floor(randomNum * (max - min + 1)) + min;
    return result
}
//Bigger code
const welcomeAndGetName = () => {
    console.log(`Welcome!`);
    const name = prompt(`what is your name?`);
    const greet = () => `Nice to meet you, ${name}!`
    return greet()
};
const mainMenu = () => {
    const welcome = welcomeAndGetName();
    console.log(welcome);
}


//exicution
mainMenu();
showOptions()

