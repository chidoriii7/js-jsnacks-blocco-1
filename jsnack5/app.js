// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Se è dispari inseriscilo nell’array.
// Stampa in console l'array risultante.

// - dichiarare un array vuoto
let numeriDispari = [];


const giri = 6;


// - creare un ciclo che si ripete 6 volte
for (let i = 0; i < giri; i++) {
    
    let numeroUtente = Number(prompt());
    if (numeroUtente % 2 === 0 ) {

    } else {

        numeriDispari.push(numeroUtente);

    }
}

console.log(numeriDispari)

// - chiedere all'utente di inserire un numero per ciclo (6 volte)
//     - se il numero è dispari inserirlo all'interno dell'array
//     - se no ignorare quel numero (?)
// -console.log([array])