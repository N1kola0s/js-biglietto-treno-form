const btn = document.getElementById("generate");

btn.addEventListener("click", function() {
console.log("click");


const full_name = document.querySelector(".full_name").value;
console.log(full_name);

const way = document.querySelector (".way").value;
console.log(way);

const age = document.querySelector (".age_range").value;
console.log(age);

//calcolo prezzo intero, ridotto in base alle fasce di età dell'utente. Ridotto per under18 con sconto 20% e over65 con sconto del 40%.

const price_one_km = 0.21;
const full_price = way * price_one_km ;

let discount_under18;
let price_under18;
let price_fixed;

let discount_over65;
let price_over65;


if (age === "Minorenne") {
    /* il prezzo del biglietto con lo sconto per gli under18 */

    discount_under18 = full_price * 0.20;
    price_under18 = full_price - discount_under18;
    price_fixed = price_under18.toFixed(2);
    console.log(price_fixed);

}


else if (age === "Over65") {
    /* il prezzo del biglietto con lo sconto per gli over65 */

    discount_over65 = full_price * 0.20;
    price_over65 = full_price - discount_over65;
    price_fixed = price_over65.toFixed(2);

    console.log(price_fixed);
    
}


else {
    /* il prezzo del biglietto intero */
    price_fixed = full_price.toFixed(2);
    console.log(price_fixed);
}


//stampa biglietto

const train_numb = Math.floor(Math.random()*10);
document.getElementById("carrozza").innerHTML = train_numb;

const code = Math.floor(Math.random() *100000) + 10000;
document.getElementById("codice").innerHTML = code;

let discount_age;

//stampa prezzo biglietto in base a fasce di età

if (age === "Over65") {
    discount_age = "Sconto over65";

}

else if (age === "Minorenne") {
    discount_age = "Sconto minorenne";
}

else {
    discount_age = "prezzo intero";
}

document.getElementById("offerta").innerHTML = discount_age;

document.getElementById("nome_passeggero").innerHTML = full_name;

document.getElementById("prezzo").innerHTML = price_fixed;


});




















/* //chiedere all'utente il nome completo

const full_name= prompt("Quale è il tuo nome? es.[Nome Cognome]");
console.log(full_name);


//chiedere all'utente il numero di km che vuole percorrere

const tratta = parseInt(prompt("Quanti Km vuoi percorrere?"));
console.log(tratta);

if (isNaN(tratta)){
    alert("Attenzione, Inserire un valore numerico");
}


//chiedere all'utente la sua età

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

if (isNaN(age)) {
    alert("Attenzione, inserire un valore numerico")
}


//calcolare prezzo intero del viaggio ed applicare ridotto con il 20% di sconto per under18  e il 40% per gli over65

const price_one_km = 0.21;
const full_price = tratta * price_one_km ;

let discount_under18;
let price_under18;
let price_fixed;

let discount_over65;
let price_over65;


if (age < 18){
    /* il prezzo del biglietto con lo sconto per gli under18 */

   /*  discount_under18 = full_price * 0.20;
    price_under18 = full_price - discount_under18;
    price_fixed = price_under18.toFixed(2);
    
    console.log(`il prezzo del tuo biglietto è ${price_fixed} €`);

}  */


/* else if (age > 65) { */
    /* il prezzo del biglietto con lo sconto per gli over65 */
/*     discount_over65 = full_price * 0.40;
    price_over65 = full_price - discount_over65;
    price_fixed = price_over65.toFixed(2);

    console.log(`Il prezzo del tuo biglietto è ${price_fixed} €`);
 */
/* } */

/* else { */
    /* il prezzo del biglietto intero */
  /*   price_fixed = full_price.toFixed(2);
    console.log(` Il prezzo del tuo biglietto è ${price_fixed} €`);

}
 */

/* document.getElementById("costo_biglietto").innerHTML = `${price_fixed} €`
 */ 











