
function SommaNum(numUser, numPc){

    let risultato = numUser + numPc;

    return risultato; 
}

let parolaUser = prompt('Pari o Dispari?');
let numUser = parseInt(prompt('Scegli un compreso tra 1 e 5'));
let numPc = Math.floor(Math.random()*5 + 1);

let somma = SommaNum(numUser, numPc);

// console.log(numUser);
// console.log(numPc);
// console.log(somma);

if(somma%2 == 0){

    console.log('')
}