/* 
-------- System 5-17-68 --------
System Multi Lotek [S-N-Z]
S - ilość skreśleń w zakładzie
N - zakres liczb systemu
Z - ilość zakładów
--------------------------------

Program pobiera od użytkownika 17 liczb i zwraca 68 zakładów Multi Lotka (po 5 liczb każdy).
*/

// === CONSTANT DATA VARIABLES ===
export const numbersPerBet = 5;
export const numbersAmount = 17;
export const betsAmount = 68;
export const betPrice = 2.5;
const maxNumber = 80;
const systemDescription = `
  System Multi Lotek
[S-N-Z-G] = 5-17-68-3/3

S - ilość skreśleń w zakładzie
N - zakres liczb systemu
Z - ilość zakładów
G - t/T - gwarancja wygranej odpowiadajacej trafieniu "t" liczb w jednym zakładzie przy trafieniu "T" liczb z całego zakresu

koszt zakładu: ${betPrice.toFixed(2)} zł
liczb na zakład: ${numbersPerBet}
zakres liczb: 1 - ${maxNumber}
`;

// === SYSTEM GENERATOR ===
export const generateBets = userNumbers => {
  // initialization of 68 bets array
  const bets = [];
  for (let i=0; i<betsAmount; i++) {
    bets.push([]);
  };

  // filling bets with user numbers (based on system diagram from newspaper)
  numberToBetsRange(userNumbers[0], bets, 1, 20);
  numberToBetsRange(userNumbers[1], bets, 1, 5);
  numberToBetsRange(userNumbers[1], bets, 21, 35);
  numberToBets(userNumbers[2], bets, [1]);
  numberToBetsRange(userNumbers[2], bets, 6, 9);
  numberToBetsRange(userNumbers[2], bets, 21, 24);
  numberToBetsRange(userNumbers[2], bets, 36, 46);
  numberToBets(userNumbers[3], bets, [1], bets);
  numberToBetsRange(userNumbers[3], bets, 10, 13);
  numberToBetsRange(userNumbers[3], bets, 25, 28);
  numberToBetsRange(userNumbers[3], bets, 36, 39);
  numberToBetsRange(userNumbers[3], bets, 47, 53);
  numberToBets(userNumbers[4], bets, [1]);
  numberToBetsRange(userNumbers[4], bets, 14, 17);
  numberToBetsRange(userNumbers[4], bets, 29, 32);
  numberToBetsRange(userNumbers[4], bets, 40, 43);
  numberToBetsRange(userNumbers[4], bets, 47, 50);
  numberToBetsRange(userNumbers[4], bets, 54, 56);
  numberToBets(userNumbers[5], bets, [2, 6, 10, 14, 18, 21, 25, 29, 33, 36, 40, 44, 47, 51, 54]);
  numberToBetsRange(userNumbers[5], bets, 57, 61);
  numberToBets(userNumbers[6], bets, [2, 7, 11, 15, 19, 22, 26, 30, 34, 36, 41, 45, 48, 52, 54, 57, 58]);
  numberToBetsRange(userNumbers[6], bets, 62, 64);
  numberToBets(userNumbers[7], bets, [2, 8, 12, 16, 20, 23, 27, 31, 35, 37, 40, 45, 48, 51, 55, 59, 60, 62, 63, 65]);
  numberToBets(userNumbers[8], bets, [3, 9, 12, 15, 18, 22, 25, 32, 35, 38, 40, 46, 49, 52, 56, 57, 61, 62, 65, 66]);
  numberToBets(userNumbers[9], bets, [3, 8, 13, 14, 19, 24, 27, 30, 33, 36, 42, 46, 49, 53, 55, 59, 61, 62, 64, 67]);
  numberToBets(userNumbers[10], bets, [3, 7, 10, 17, 20, 23, 28, 29, 34, 38, 42, 44, 48, 53, 56, 57, 59, 64, 65, 68]);
  numberToBets(userNumbers[11], bets, [4, 8, 11, 17, 18, 22, 28, 31, 33, 39, 43, 44, 49, 51, 54]);
  numberToBetsRange(userNumbers[11], bets, 63, 67);
  numberToBets(userNumbers[12], bets, [4, 9, 10, 16, 19, 21, 27, 32, 34, 39, 42, 45, 50, 52, 54, 60, 61, 65, 67, 68]);
  numberToBets(userNumbers[13], bets, [4, 6, 13, 15, 20, 24, 26, 29, 35, 38, 43, 45, 50, 51, 55, 58, 61, 64, 66, 68]);
  numberToBets(userNumbers[14], bets, [5, 7, 13, 16, 18, 21, 28, 30, 35, 37, 43, 46, 47, 52, 56, 58, 59, 63, 67, 68]);
  numberToBets(userNumbers[15], bets, [5, 9, 11, 14, 20, 24, 25, 31, 34, 37, 41, 44, 50, 53, 56, 58, 60, 62, 66, 67]);
  numberToBets(userNumbers[16], bets, [5, 6, 12, 17, 19, 23, 26, 32, 33, 39, 41, 46, 47, 53, 55, 57, 60, 63, 66, 68]);

  return bets;
};

// === HELPER FUNCTIONS ===
// *inputs counting from 1 (easier to use when reading system schema)

// push number (number) to all bets of given number (list) inside bets array (list of lists)
const numberToBets = (number, array, bets) => {
  for (let i=0; i<bets.length; i++) {
    array[bets[i]-1].push(number);
  };
};

// push number (number) to all bets of given number range (first and last number, both included) inside bets array (list of lists)
const numberToBetsRange = (number, array, firstBet, lastBet) => {
  for (let i=firstBet-1; i<lastBet; i++) { 
    array[i].push(number);
  };
};

// === DISPLAY FUNCTION ===
const displayBets = bets => {
  console.log(systemDescription);
  console.log(`Twoje liczby [${numbersAmount}]: ${myNumbers}
  `);
  console.log(`Wygenerowano ${betsAmount} zakładów Multi Lotka na podstawie ${myNumbers.length} liczb.`);
  console.log(`Koszt zakładów: [${betsAmount*betPrice} zł] \n`)
  bets.forEach((bet, i, bets) => {
    console.log(`Zakład ${i+1}: \t ${bet}\t\t [${bet.length} liczb]`);
  });
};

// === RUN APP ===
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// const myBets = generateBets(myNumbers);
// displayBets(myBets);