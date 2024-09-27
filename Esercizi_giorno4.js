/*
**** ESERCIZIO 1 ****
Utilizzare il ciclo for per mostrare i numeri pari da 2 a 10
*/
let msg="";
for (let i = 2; i <= 10; i += 2) {
   msg += "<br> Numero " + i;
}
document.getElementById("esercizio1").innerHTML = msg ;

/*
**** ESERCIZIO 2 ****
Riscrivere il seguente ciclo for utilizzando la sintassi while, ma senza alterarne la funzionalità (l’output
deve rimanere lo stesso).
for (let i = 0; i < 5; i++) {
alert(i);
}
*/

let i = 0;
while (i < 5) {
    alert(i);
    i++;
}

/*
**** ESERCIZIO 3 ****
Scrivi un ciclo che richieda (tramite prompt) di inserire un numero compreso tra 1 e 10. Se l’utente
inserisce un numero non valido, i ciclo si interrompe.
Il ciclo deve continuare a richiede un numero fintanto che l’utente non inserisce un numero maggiore di
10
*/

let numero;
do {
    numero = parseInt(prompt("Inserire un numero compreso tra 1 e 10. Se si inserisce un numero non valido, i ciclo si interrompe."));
} while (numero >= 1 && numero <= 10);

/*
**** ESERCIZIO 4 ****
Scrivere un programma che, dato un array di numeri, determini (con un ciclo for) qual è il numero
maggiore.
*/

const numeri = [4, 7, 2, 9, 1];
let massimo = 0;
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > massimo) {
        massimo = numeri[i];
    }
}
//console.log(`Il numero maggiore  ${massimo}`);
document.getElementById("esercizio4").innerHTML = "Il numero maggiore  " + massimo;

/*
TRACCIA #03.1 Linguaggio JS
Scrivete un programma in JavaScript per trovare il più grande di cinque numeri.
*/

const num1 = 37;
const num2 = 45;
const num3 = 32;
const num4 = 38;
const num5 = 50;

let largest = num1;

if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}

//console.log(`Il numero maggiore è ${largest}`);
document.getElementById("esercizio3.1").innerHTML = "Il numero maggiore  " + largest;

/*
TRACCIA #03.2 Linguaggio JS

*/


for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        //console.log(`Il numero ${i} è pari`);
        document.getElementById("esercizio3.2").innerHTML += `Il numero ${i} è pari` + "<br>";
    } else {
        //console.log(`Il numero ${i} è dispari`);
        document.getElementById("esercizio3.2").innerHTML += `Il numero ${i} è dispari` + "<br>";
    }
}

/*
TRACCIA #03.3 Linguaggio JS
Scrivere un programma JavaScript che iteri i numeri interi da 1 a 100. 
Ma per i multipli di tre stampa "multiplo di 3" al posto del numero e per i multipli di cinque stampa "multiplo di 5". 
Per i numeri che sono multipli di tre e di cinque stampa "Multiplo di 3 e 5", mentre per tutti gli altri, stampa solo il numero.

*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        //console.log("Multiple of 3 and 5");
        document.getElementById("esercizio3.3").innerHTML += "Multiplo di 3 e di 5" + "<br>";
    } else if (i % 3 === 0) {
        //console.log("multiple of 3");
        document.getElementById("esercizio3.3").innerHTML += "multiplo di 3" + "<br>";
    } else if (i % 5 === 0) {
        //console.log("multiple of 5");
        document.getElementById("esercizio3.3").innerHTML += "multiplo di 5" + "<br>";
    } else {
        //console.log(i);
        document.getElementById("esercizio3.3").innerHTML += i + "<br>";
    }
}


/*
TRACCIA #03.4 Linguaggio JS
Scrivere un programma JavaScript che ritorni il seguente output
1
12
123
1234
12345
123456
1234567
12345678
*sono necessari 2 cicli for annidati.
*/

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= i; j++) {
        document.getElementById("esercizio3.4").innerHTML += j;
    }
    document.getElementById("esercizio3.4").innerHTML += "<br>";
}


/*
TRACCIA #3.5 Linguaggio JS 
Scrivere un programma JavaScript che stampi i primi 8 numeri della serie di Fibonacci utilizzando il ciclo While
*/


let n1 = 0;
let n2 = 1;
let nextTerm = 1;
let ops = 0;

while (ops < 8) {
    document.getElementById("esercizio3.5").innerHTML += nextTerm + "<br>";
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    ops++;
}

/*
TRACCIA #03.6 Linguaggio JS
Scrivere un programma JavaScript che, dato un numero in input dall’utente,  stampi:
“è un numero primo” se il numero dato dall’utente è un numero primo
“non è un numero primo” se il numero dato dall’utente non è un numero primo
“numero negativo” se il numero dato dall’utente è negativo
*/


let number = parseInt(prompt("Inserisci un numero: "));
if (number < 0) {
    document.getElementById("esercizio3.6").innerHTML = "Numero negativo";
} else {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("esercizio3.6").innerHTML = "E' un numero primo";
    } else {
        document.getElementById("esercizio3.6").innerHTML = "Non e' un numero primo";
    }
}
