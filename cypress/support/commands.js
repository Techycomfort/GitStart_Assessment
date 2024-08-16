

Cypress.Commands.add('generateRandomEmail', () => {
    const randomWord = () => Math.random().toString(36).substring(2, 8);
    const randomNumber = () => Math.floor(Math.random() * 10000);
  
    const word1 = randomWord();
    const word2 = randomWord();
    const number = randomNumber();
  
    const email = `${word1}.${word2}.${number}@gmail.com`;
  
    return email;
  });