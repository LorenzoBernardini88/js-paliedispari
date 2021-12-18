// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Svolgimento : 

function checkPalindrome(word) { //funzione che stabilisce se la parola scelta è Palindroma.
    let l = wordArr.length;
    for (let i = 0; i < l/2 ; i++) {
        if (wordArr[i] == wordArr[l-1-i]){ // Confronto fra di loro i diversi indici dell'array.
            return true;
        }
    }
    return false;
}

let word = prompt('inserisci una parola');//Parola scelta dall'utente.
let wordArr = [];//creo array vuoto. 

for(i=0; i<word.length; i++){   /* inserisco nell'array i singoli elementi che compongono 
                                la parola scelta dall'utente.*/
    wordArr.push(word[i]);
}

if (checkPalindrome(word)) { //Se la Funzione restituisce il volore true : la parola è Palindroma.
    document.write("La Parola è Palindroma");
} else { //Altrimenti la Funzione restituisce il volore false : la parola NON è Palindroma.
    document.write("La Parola non è Palindroma");
}