// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var difficoltà = Number(prompt("scegli una difficolà: 0, 1, 2"));

if (difficoltà == "0") {
  var maxNum = 100;
} else if (difficoltà == "1") {
  var maxNum = 80;
} else if (difficoltà == "2") {
  var maxNum = 50;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// Funzione per creare un numero casuale tra 1 e 100.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomNumber(1, 100));

// I numeri non possono essere duplicati.
//Il punto esclamativo serve per mettere il contrario di quello che vorrei
// viene utilizzata la funzione in Array al contrario con !, per pushare i numeri non inclusi nell'array.
var numeriPC = [];
var maxNum

while (numeriPC.length !== 16) {
  var number = getRandomNumber(1, maxNum);
  if (! inArray(numeriPC, number)){
    numeriPC.push(number);
  }
}
console.log(numeriPC, numeriPC.length);

// crea funzione per verificare se un numero è presente nell'array.
// Fa quello che farebbe includes.
function inArray (array, number) {
  var i = 0;
  while (i < array.length) {
    if (number === array[i]) {
      return true;
    }
    i++;
  }
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire
// un numero alla volta, sempre compreso tra 1 e 100.
var numeriUtente = [];
var possibilità = 4;

for (var i = 0; i <= possibilità; i++) {
  var numeroUtente = Number(prompt("Inserisci un numero tra 1 e 100"));
  // Se il numero è presente nella lista dei numeri generati,
  // La partita termina quando il giocatore inserisce un numero “vietato”
  // altrimenti si continua chiedendo all’utente un altro numero.
  if (inArray(numeriPC, numeroUtente)) {
    console.log("Bomba! Game over!");
    break;
  }
  // L’utente non può inserire più volte lo stesso numero.
  while (inArray(numeriUtente, numeroUtente)) {
    alert("Hai già usato questo numero! Non puoi usare due volte lo stesso numero")
    numeroUtente = Number(prompt("Inserisci un numero tra 1 e 100"));
  }
  numeriUtente.push(numeroUtente);
  // vince quando raggiunge il numero massimo possibile di numeri consentiti.
  if (numeriUtente.length > possibilità) {
    console.log("Hai vinto!");
    break;
  }
}
//console.log(numeriUtente);

// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("Il tuo punteggio è stato di " + numeriUtente.length);
