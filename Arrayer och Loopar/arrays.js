//En lista av tal.
//Längden på listan är 3 för att det finns tre saker i den.
//Första talet i listan ligger på index(position) 0.
//Sista indexet(positionen) är alltid listans längd -1. 
const arrayOfNumbers = [1, 2, 3]

//En variabel för att spara resultatet i loopen nedan.
let sum = 0

//En for-loop som börjar på 0 och fortsätter så länge i är mindre än arrayOfNumbers längd.
//Efter varje gång loopen körts så räknas i upp med 1.
for (let i = 0; i < arrayOfNumbers.length; i++) {

    //Adderar det som finns i sum med värdet av det som ligger på position i arrayOfNumbers sen
    //sparar det i sum igen. 
    sum += arrayOfNumbers[i]    
}

console.log(`Summan av alla talen i listan är: ${sum}`)

console.log("<---------------------------------------------------------------->")


//Arrayer har inbyggda metoder för att underlätta när vi skriver kod.
//Här kommer några exempel:


//En lista av ord
const arrayOfText = ["apa", "bepa", "cepa"]

//Går igenom varje sak i listan och låter oss göra något med värdet.
//Värdet lagras i en temporär variabel, i detta fallet heter den 'word' men vi kan välja själva.
arrayOfText.forEach(word => {
    console.log(word)
});

console.log("<---------------------------------------------------------------->")

//Index of ger oss positionen av ett visst värde i en lista
let indexOfBepa = arrayOfText.indexOf("bepa")
console.log(`Positionen av "bepa" är: ${indexOfBepa}`)

console.log("<---------------------------------------------------------------->")

console.log(`Såhär ser listan med ord ut: ${arrayOfText}`)
let shiftedValue = arrayOfText.shift()
console.log(`Såhär ser listan med ord ut efter '.shift()': ${arrayOfText}`)
console.log(`Detta är vad som kommer ut ur '.shift()': ${shiftedValue}`)
shiftedValue = arrayOfText.shift()
console.log(`Såhär ser listan med ord ut efter '.shift()': ${arrayOfText}`)
console.log(`Detta är vad som kommer ut ur '.shift()': ${shiftedValue}`)
shiftedValue = arrayOfText.shift()
console.log(`Såhär ser listan med ord ut efter '.shift()': ${arrayOfText}`)
console.log(`Detta är vad som kommer ut ur '.shift()': ${shiftedValue}`)
console.log(`Nu är listan tom.`)

console.log("<---------------------------------------------------------------->")

//Låt os stoppa tillbaka värden i listan med '.push()'.
arrayOfText.push("apa")
console.log(`Såhär ser listan ut nu efter '.push("apa")': ${arrayOfText}`)
arrayOfText.push("bepa")
console.log(`Såhär ser listan ut nu efter '.push("bepa")': ${arrayOfText}`)
arrayOfText.push("cepa")
console.log(`Såhär ser listan ut nu efter '.push("cepa")': ${arrayOfText}`)

console.log("<---------------------------------------------------------------->")

//Man kan också stoppa in flera värden samtidigt med '.push()'
arrayOfText.push("depa", "epa", "fepa")
console.log(`Såhär ser listan ut nu efter '.push("depa", "epa", "fepa")': ${arrayOfText}`)

console.log("<---------------------------------------------------------------->")

//Man kan använda '.join' för att slå ihop innehållet i listan med en vald separator
console.log(`Såhär ser listan ut: ${arrayOfText}`)
let joinResult = arrayOfText.join('|')
console.log(`Såhär ser resultatet av '.join('|')' ut: ${joinResult}`)

console.log("<---------------------------------------------------------------->")