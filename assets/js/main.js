//chiedere all'utente il nome completo

const full_name= prompt("Quale è il tuo nome? es.[nome cognome");
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

    discount_under18 = full_price * 0.20;
    price_under18 = full_price - discount_under18;
    price_fixed = price_under18.toFixed(2);
    
    console.log(`il prezzo del tuo biglietto è ${price_fixed} €`);

} 


else if (age > 65) {
    /* il prezzo del biglietto con lo sconto per gli over65 */
    discount_over65 = full_price * 0.40;
    price_over65 = full_price - discount_over65;
    price_fixed = price_over65.toFixed(2);

    console.log(`Il prezzo del tuo biglietto è ${price_fixed} €`);

}

else {
    /* il prezzo del biglietto intero */
    price_fixed = full_price.toFixed(2);
    console.log(` Il prezzo del tuo biglietto è ${price_fixed} €`);

}


document.getElementById("costo_biglietto").innerHTML = `${price_fixed} €`

const div = document.querySelector("nome_cognome").value = ${full_name};











