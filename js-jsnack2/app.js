// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// - fare inserire all'utente una prima parola
const parola1 = prompt('inserisci la prima parola');
// - fare inserire all'utente una seconda parola
const parola2 = prompt('inserisci la seconda parola');

// - effettuare un controllo sulla lunghezza di entrambe la parole

//     -stampare prima la parola più corta
//     -stampare come seconda la parola più lunga
if (parola1.length < parola2.length) {

    console.log('la parola più corta è:', parola1, (parola1.length));
    console.log('la parola più lunga è:', parola2, (parola2.length));

} else if (parola2.length < parola1.length) {

    console.log('la parola più corta è:', parola2, (parola2.length));
    console.log('la parola più lunga è:', parola1, (parola1.length));
    
} else {
    
    console.log('le parole hanno la stessa lunghezza');

}

