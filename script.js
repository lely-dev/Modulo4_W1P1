/* ES 1 CREA UNA FUNZIONE CHE CONTROLLI DUE NUMERI INTERI
RITORNA "TRUE" SE UNO DEI DUE è 50 O SE LA SOMMA DEI DUE è 50.
*/

// let numberOne = 45;
// let numberTwo = 10;


// function controlNumber() {
//     if ((numberOne === 50 || numberTwo === 50) || numberOne + numberTwo === 50){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(controlNumber());




/* ES 2 CREA UNA FUNZIONE CHE RIMUOVA IL CARATTERE AD UNA SPECIFICA POSIZIONE DA UNA STRINGA.
PASSA LA STRINGA E LA POSIZIONE COME PARAMETRI E RITORNA LA STRINGA MODIFICATA. */

let testo = "cavatappi";

function removeLetter(){
    
}


/* ES 3 CREA UNA FUNZIONE CHE CONTROLLI SE DUE NUMERI SIANO COMPRESI TRA 40 E 60 O TRA 70 E 100.
RITORNA "TRUE" SE RISPECCHIANO QUESTE CONDIZIONI, ALTRIMENTI RITORNA "FALSE" */

// let numberOne = 75;
// let numberTwo = 20;


// function controlNumber() {
//     if (numberOne >= 40 && numberOne<= 60 || numberTwo >= 40 && numberTwo<= 60 ){
//         return true;
//     } else if (numberOne >= 70 && numberOne<= 100 || numberTwo >= 70 && numberTwo<= 100 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(controlNumber());





/* ES 4 CREA UNA FUNZIONE CHE ACCETTI UN NOME DI CITTà COME PARAMETRO E RITORNI IL NOME STESSO SE INIZIA 
CON "LOS" O "NEW", ALTRIMENTI RITORNI "FALSE" */

// let myCity = "New York";

// function checkCity () {
    
//     let cityLowerCase = myCity.toLowerCase();
//     if ( cityLowerCase.includes("los") || cityLowerCase.includes("new")){
//        console.log(myCity);
//     } else {
//         console.log(false);
//     }

    
// }

// checkCity();


/* ES 5 CREA UNA FUNZIONE CHE CALCOLI E RITORNI LA SOMMA DI TUTTI GLI ELEMENTI DI UN ARRAY.
L'ARRAY DEVE ESSERE PASSATO COME PARAMETRO */

// let myArray = [1,4,7,12,6,90,57];


// function calculator () {
//     let total=0;
//     myArray.forEach(element => {
//         total += element;
//     });

//     return total;
// }

// console.log(calculator());



/* ES 6 CREA UNA FUNZIONE CHE CONTROLLI CHE UN ARRAY NON CONTENGA I NUMERI 1 O 3.
SE NON LI CONTIENE RITORNA "TRUE", ALTRIMENTI RITORNA "FALSE" */


// let myArray = [2,4,6,12,6,90,57];

// function checkNumber () {
//     for (let i = 0; i < myArray.length; i++) {
//         if (myArray[i] === 1 || myArray[i] === 3) {
//             console.log(false);
//         } else {
//             console.log(true);
//         }
        
//     }
// }

// checkNumber();

/* ES 7 CREA UNA FUNZIONE PER TROVARE IL TIPO DI UN ANGOLO I CUI GRADI SONO PASSATI COME PARAMETRO.
ANGOLO ACUTO: MENO DI 90° => RITORNA ACUTO
ANGOLO OTTUSO: TRA I 90° E I 180° => RITORNA OTTUSO
ANOLO RETTO: 90° => RITORNA RETTO
ANGOLO PIATTO: 180° => RITORNA PIATTO */

// let angolo = 180;

// function checkAngolo (){
//     if (angolo < 90){
//         console.log("acuto");
//     } else if ( angolo > 90 && angolo < 180){
//         console.log("ottuso");
//     } else if ( angolo === 90){
//         console.log("retto");
//     } else if ( angolo === 180 ){
//         console.log("piatto");
//     }
// }

// checkAngolo();


/* ES 8 CREA UNA FUNZIONE CHE CREI UN ACRONIMO A PARTIRE DA UNA FRASE.
ES: "Fabbrica Italiana Automobili Torino" DEVE TORNARE "FIAT" */

// let myWord = "Fabbrica Italiana Automobili Torino";

// function acronimo (){
//     let singleWord = myWord.split(" ");
//     let acronimoWord = "";
//     for (let i = 0; i < singleWord.length; i++) {
//         acronimoWord += singleWord[i].charAt(0);
        
        
//     }

//     console.log(acronimoWord);
// }


// acronimo();