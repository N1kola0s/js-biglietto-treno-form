//generazione biglietto dell'utente

const btn = document.getElementById("generate");

btn.addEventListener("click", function() {
console.log("click");


const full_name = document.querySelector(".full_name").value;
console.log(full_name);

const way = document.querySelector (".way").value;
console.log(way);

const age = document.querySelector (".range").value;
console.log(age);

//calcolo del prezzo intero, ridotto in base alle fasce di età dell'utente. Ridotto per under18 con sconto 20% e over65 con sconto del 40%.


//calcolo del prezzo intero del biglietto
const price_one_km = 0.21;
const full_price = way * price_one_km ;

//calcolo e assegnazione del prezzo ridotto con i relativi sconti per fascia di età 

let discount_under18;
let price_under18;
let price_fixed;

let discount_over65;
let price_over65;

//calcolo del prezzo del biglietto con lo sconto per gli under18 
if (age === "Minorenne") {
    

    discount_under18 = full_price * 0.20;
    price_under18 = full_price - discount_under18;
    price_fixed = price_under18.toFixed(2);
    console.log(price_fixed);

}

//calcolo del prezzo del biglietto con lo sconto per gli over65 
else if (age === "Over65") {
    

    discount_over65 = full_price * 0.20;
    price_over65 = full_price - discount_over65;
    price_fixed = price_over65.toFixed(2);

    console.log(price_fixed);
    
}

// calcolo del prezzo del biglietto intero */
else {
    
    price_fixed = full_price.toFixed(2);
    console.log(price_fixed);
}


//********STAMPA BIGLIETTO UTENTE**********


//stampa nome utente

document.getElementById("nome_passeggero").innerHTML = full_name;

//stampa dell' offerta applicata in base alle fasce di età

let discount_age;

if (age === "Over65") {
    discount_age = "Sconto over65";

}

else if (age === "Minorenne") {
    discount_age = "Sconto minorenne";
}

else {
    discount_age = "Prezzo Intero";
}

document.getElementById("offerta").innerHTML = discount_age;

//stampa del numero random della carrozza 
const train_numb = Math.floor(Math.random()*10);
document.getElementById("carrozza").innerHTML = train_numb;

//stampa del numero random del codice cp
const code = Math.floor(Math.random() *100000) + 10000;
document.getElementById("codice").innerHTML = code;

//stampa del costo del biglietto

document.getElementById("prezzo").innerHTML = price_fixed + " €";

});

// reset dati della pagina 

const reset = document.getElementById("cancel");

reset.addEventListener("click", function() {
console.log("cancel click");
/* location.reload() */

//reset form input
document.getElementById("myform").reset();

// reset contenuto stampa biglietto
document.getElementById("nome_passeggero").innerHTML = "";
document.getElementById("offerta").innerHTML = "";
document.getElementById("carrozza").innerHTML = "";
document.getElementById("codice").innerHTML = "";
document.getElementById("prezzo").innerHTML = "";

});
