// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Svolgimento:

function SommaNum(numUser, numPc){

    let risultato = numUser + numPc;

    return risultato; 
}

let parolaUser = prompt('Pari o Dispari?');
let numPc;
let numUser;
let somma = 0 ;

if((parolaUser == 'Pari')||(parolaUser =='Dispari')){
    numUser = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));
    numPc = Math.floor(Math.random()*5 + 1);
    somma = SommaNum(numUser, numPc);

    console.log(numUser);
    console.log(numPc);
    console.log(somma);
    
    if((parolaUser == 'Pari')&&(somma%2 == 0)){
        
        console.log('HAI VINTO!');
    
    }else if((parolaUser == 'Dispari')&&(somma%2 != 0)){
        
        console.log('HAI VINTO');
    
    }else{

        console.log('HAI PERSO');
    }
        
}else {
    console.log('ERRORE!!! INSERISCI "Pari" o "Dispari"');
}





    
