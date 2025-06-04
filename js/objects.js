// gli OGGETTI in JS (nello sviluppo sw in generale) rappresentano delle entità complesse,
// che tornano utili nel momento in cui si desidera "modellare" un qualcosa di più
// strutturato di una singola stringa, numero etc.

// un oggetto è semplicemente un tipo di dato che può contenere altri dati al suo interno
// tecnicamente, un oggetto viene rappresentato con una serie di COPPIE CHIAVE:VALORE

const fufi = {
  // queste sono PROPRIETÀ dell'oggetto
  // coppie chiave:valore (key:value)
  // le proprietà dell'oggetto vengono sempre separate da VIRGOLE
  type: 'cat',
  age: 4,
  sterilized: true,
  breed: 'Persian',
  numberOfPaws: 4,
  age: 5, // ho già definito una proprietà age! questa la sovrascriverà
  // perchè NON possono esserci due proprietà con la stessa chiave allo stesso livello
  // in un oggetto
  owner: {
    firstName: 'Stefano',
    lastName: 'Casasola',
    area: 'FVG',
    age: 20,
    phone: '3295823482384',
    hasOtherCats: true,
  },
  'fur-color': 'black',
}

console.log('questo è fufi', fufi)

// Come si recuperano i valori delle proprietà di un oggetto?
// DUE TECNICHE
// 1) DOT NOTATION (notazione punto)
const message =
  'Il tipo del mio animale domestico è ' +
  fufi.type +
  ' e la sua razza è ' +
  fufi.breed +
  ' e il suo padrone si chiama ' +
  fufi.owner.firstName

console.log(message)

// 2) SQUARE BRACKETS NOTATION (notazione parentesi quadre)
// la square brackets notation serve solamente in due situazioni:
// a) quando il nome della proprietà ha caratteri illegali per la creazione di variabili
// fufi.fur-color // NON FUNZIONA, dobbiamo usare la square brackets notation
const type = fufi['fur-color'] // 'cat'
console.log(type)
// b) quando dovete accedere ad una proprietà di un oggetto specificata come valore di una variabile
const x = 'breed'
fufi.x // undefined
fufi[x] // 'Persian', è il valore della proprietà "breed" di fufi

// per il resto, funziona uguale!
const message2 =
  'Il tipo del mio animale domestico è ' +
  fufi['type'] +
  ' e la sua razza è ' +
  fufi['breed'] +
  ' e il suo padrone si chiama ' +
  fufi['owner']['firstName']

// tentare di leggere una proprietà inesistente in un oggetto ritornerà undefined
console.log(fufi.gattino)

// e come si MODIFICANO le proprietà di un oggetto?
fufi.age = 6
// dentro un oggetto, l'operatore di assegnazione sono i :
// al di fuori dell'oggetto, torna ad essere =
console.log(fufi)

// fufi = 100 // ERRORE DI RIASSEGNAZIONE
