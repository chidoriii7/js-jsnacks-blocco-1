// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let risultato = 0

// creare un ciclo che gira 10 volte
for(let i = 0 ; i < 10; i++) {
    
    // chiedere all'utente di inserire un numero ogni volta che il ciclo si ripete (10 volte)
    // fare la somma di tutti i numeri inseriti

    risultato = risultato + Number(prompt('Inserisci un numero'));
    
}

console.log(risultato)