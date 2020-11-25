// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var maxNum;

var difficoltà = Number(prompt("Inserisci un livello di difficoltà. 0 facile, 1 normale, 2 difficile"));

if (difficoltà == 0) {
  maxNum = 100;
} if (difficoltà == 1) {
  maxNum = 50;
} if (difficoltà == 2) {
  maxNum = 20;
}
// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrayPC = [];

// I numeri non possono essere duplicati
function duplicati (array, number) {
  var i = 0;
  while (i < array.length) {
    if (number === array[i]) {
      return true;
    }
    i++;
  }
}

while (arrayPC.length < 16) {
  var numeroPC = Math.floor(Math.random() * maxNum) + 1;
  if (! duplicati(arrayPC, numeroPC)) {
    arrayPC.push(numeroPC);
  }
}
console.log(arrayPC);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var possibilità = 4;
var arrayUtente = [];

for (var i = 0; i < possibilità; i++) {
  var numeroUtente = Number(prompt("Inserisci un numero compreso fra 1 e 100"));
  // Se il numero è presente nella lista dei numeri generati, la partita termina.
  if (duplicati(arrayPC, numeroUtente)) {
    alert("Hai perso");
    break;
    // L’utente non può inserire più volte lo stesso numero.
  } else if (duplicati(arrayUtente, numeroUtente)) {
    alert("Hai inserito lo stesso numero");
    numeroUtente = Number(prompt("Inserisci un numero compreso fra 1 e 100"));
  }
  arrayUtente.push(numeroUtente);
  // Vince se raggiunge il numero massimo possibile di numeri consentiti.
  if (arrayUtente.length == possibilità) {
    alert("Hai vinto");
    break;
  }
}

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("Il tuo punteggio è stato di " + arrayUtente.length);
