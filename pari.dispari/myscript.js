// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Svolgimento:

//Creo Funzione per fare la somma di numeroUtente e numeroPc.
function SommaNum(){

    numRandom = Math.floor(Math.random()*5 + 1);
    let risultato = numUser + numRandom;

    return risultato; 
}

let parolaUser = prompt('Pari o Dispari?');//chiedo all'utente di inserire la parola Pari o Dispari.
let numUser;//creo variabile numero Utente, non definita.
let numComp;//creo variabile numero PC, non definita.
let somma;// creo variabile per assegnare risultato della Funzione, non definita.


if((parolaUser == 'Pari')||(parolaUser =='Dispari')){ //condizione necessaria affinchè le variabili non definite vengano generate.
    
    numUser = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));

    if((numUser>=1)&&(numUser<=5)){
        
        somma = SommaNum();
        numComp = numRandom;
        console.log('NUMERO UTENTE:'+" "+ numUser);
        console.log('NUMERO PC:'+" "+ numComp);
        console.log('SOMMA:'+" "+ somma);
        
        //Svolgimento del gioco.
        if((parolaUser == 'Pari')&&(somma%2 == 0)){ // Condinzione Vittoria Utente Pari.
            
            console.log('HAI VINTO!');
        
        }else if((parolaUser == 'Dispari')&&(somma%2 != 0)){ // Condinzione Vittoria Utente Dispari.
            
            console.log('HAI VINTO');
        
        }else{ // Condizione Sconfitta Utente e Vittoria del Computer.

            console.log('HAI PERSO');
        }

    }else {

        console.log('ERRORE!!! INSERISCI un Numero compreso tra 1 e 5'); // Messaggio Errore per Condizione iniziale non verificata.
        
    }
    
}else {
    console.log('ERRORE!!! INSERISCI "Pari" o "Dispari"'); // Messaggio Errore per Condizione iniziale non verificata.
}






