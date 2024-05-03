// Snack 9
// Calcola la somma e la media dei primi 10 numeri.
// Stampa i risultati in console

let randomNumbers = 0

const giri = 10

let media = 0

for(let i = 0; i < giri; i++){

    randomNumbers = Math.floor((Math.random() * 1000) + 1);
    media = media + randomNumbers / giri

    console.log(randomNumbers)
}

console.log('la media è:', media)


