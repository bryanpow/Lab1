//imports
const prompt = require('prompt-sync')({signit : true})
//notes
/*
Log a generic welcome 
Get a user's name via prompt
Greet the user with their name
Return the user's name
*/
//Small code /helper functions
const sayGoodbye = (name) => {
    console.log(`Goodbye ${name}!`)
}
const playAgain = () => {
    const option = prompt(`Want to play again? Enter y or n: `);
    return option === 'y'? 'y' : 'n'
}
const getUserNumber = () => {
   let number = prompt('Enter your choice! :');
   number = Number(number);
   return number
}
const getRandomNumBetween = (min,max) => {
    const randomNum = Math.random();
    const result = Math.floor(randomNum * (max - min + 1) + min);
    return result
}
const checkAns = (user,comp) => {
    return (user === comp)
}
const wordsOfWisdom = [
    'You should go to bed by 12:30',
    "It's better to mostly understand a little more every day, than to never move forward until you understand everything",
    'Eating breakfast has statistical benefits to brain power',
    "The best laid plans often fail, but plans that don't exist can never succeed",
    'Time management and communication are the two most important skills in the workplace',
    'Try to listen more than you speak',
  ]

  const cheers = [
    'You can do it!',
    'You are the best!',
    'You are a coding machine!',
    'YOU ARE UNREALLLLLLLLL!',
    'LITERALLY UNSTOPPABLE!',
    "Can't even handle your greatness right now!",
  ];

  const getWordsOfWisdom = () => {
     const output = wordsOfWisdom[getRandomNumBetween(0, wordsOfWisdom.length)]; 
     console.log(output);
     const restart = playAgain();
     return restart === 'y'? getWordsOfWisdom() : gameSelect()
  }
const getCheer = () => {
    const output = cheers[getRandomNumBetween(0, cheers.length)];
    console.log(output);
    const restart = playAgain();
     return restart === 'y'? getCheer() : gameSelect()
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

const handleGuessingGame = (userIn) => {
    const userNum = Number(userIn);
    const number = getRandomNumBetween(1,10);
    const correct = checkAns(userNum,number);
    if (correct) {
        console.log('Congratulations, that is correct!');
    } else {
        console.log(`That is incorect, better luck next time!`);
    };
    const restart = playAgain();
    return restart === 'y'? guessingGame() : gameSelect()
}
const guessingGame = () => {
    console.log('Welcome to the guessing game!\nDirections:\n1. IM going think of a number between 1 and 10 and YOU Guess the correct number to win! When your ready to start:');
    const userChoice = getUserNumber();
    return handleGuessingGame(userChoice);
    
}

const gameSelect = () => {
    console.log('Here are your options:\n1 - Play a guessing game\n2 - Words of wisdom\n3 - Cheer you on\nAny other number - Exit\n');
    const userChoice = getUserNumber();
    if (userChoice === 1) {
        return guessingGame()
    } else if (userChoice === 2) {
        return getWordsOfWisdom();
    } else if (userChoice === 3) {
        return getCheer()
    }
} 
//exicution
mainMenu();
gameSelect()



