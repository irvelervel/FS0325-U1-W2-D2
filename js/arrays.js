// un array nello sviluppo software rappresenta una LISTA, una COLLEZIONE di valori.
// a differenza degli oggetti, non esistono "etichette" (chiavi)
// viene utile per rappresentare cose come elenchi di nomi, di cose, di numeri, di oggetti

// un array in JS si dichiara utilizzando la parola const e delimitandone il valore con [ ]

const nomi = ['Amin', 'Anna', 'Christian', 'Francesco', 'Gerardo']
const numeri = [40, 20, 34.56, 12000]
const booleani = [false, false, true, false]

const mixed = ['Stefano', 101, true, 'Fufi']

// i valori all'interno di un array NON hanno una chiave/etichetta/nome
// quindi l'unica cosa che li differenzia è la loro P O S I Z I O N E (indice)

// gli array in JS sono zero-indexed based, il primo elemento ha SEMPRE posizione 0
// ogni array in JS ha una LUNGHEZZA (length), che è pari al NUMERO DI ELEMENTI che contiene
// l'ultimo elemento di un array avrà SEMPRE posizione lunghezza-1

// per recuperare un elemento da un array, si utilizzano le quadre e la sua POSIZIONE (indice)

nomi[0] // 'Amin'
numeri[2] // 34.56
mixed[3] // 'Fufi'

const message =
  'Io mi chiamo ' +
  nomi[1] +
  ', il mio numero preferito è ' +
  numeri[0] +
  ' e dico sempre il ' +
  booleani[2]

console.log(message)

// EXTRA: selezioniamo indici casuali
// // Math.random() genera un numero da 0.0000001 a 0.9999999
// Math.random() * 3

// const message =
//   'Io mi chiamo ' +
//   nomi[Math.floor(Math.random() * 3)] +
//   ', il mio numero preferito è ' +
//   numeri[Math.floor(Math.random() * 3)] +
//   ' e dico sempre il ' +
//   booleani[Math.floor(Math.random() * 3)]
