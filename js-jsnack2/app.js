// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// - fare inserire all'utente una prima parola
let parola1 = prompt('inserisci la prima parola')
// - fare inserire all'utente una seconda parola
let parola2 = prompt('inserisci la seconda parola')

// - effettuare un controllo sulla lunghezza di entrambe la parole

//     -stampare prima la parola più corta
//     -stampare come seconda la parola più lunga
if (parola1.length < parola2.length) {

    console.log('la parola più corta è:', parola1, 'e la parola più lunga è:', parola2)

} else {

    console.log('la parola più corta è:', parola2, 'e la parola più lunga è:', parola1)
    
}

