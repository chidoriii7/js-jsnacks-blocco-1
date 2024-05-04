// Snack 8
// Chiedi un numero di 4 cifre all’utente
// Calcola la somma di tutte le cifre che compongono il numero.
// Stampa il risultato in console


// - chiedere all'utente un numero di 4 cifre
const numeroInput = prompt('Inserisci un numero di 4 cifre');

let sum = 0;

if (numeroInput > 999 && 10000 > numeroInput) {
    // -tramutare il numero in stringa per inserirlo in un array 
// -dividerlo in 4 cifre separate
// -farlo tornare ad essere un numero
    const array = [...numeroInput.toString()].map(Number);

    for(let i = 0; i < array.length; i++) {

// -calcolare la somma di tutte le cifre 
        sum = sum + array[i];

        console.log(array[i]);
    }

} else {

    console.log('hai inserito un numero non idoneo, riprova.');
    
}

console.log(sum);

