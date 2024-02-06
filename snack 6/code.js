// dichiarazione
const numbers=  [];
// assegnazione 0 var somma 
let somma = 0;
// ciclo
for(let i=0;i<10;i++)
{
    // assegnazione variabile push i valori di i
    numbers.push(i+1);
    // somma a cui assegno i valori di i
    somma += numbers[i];
     
}

// definiaione di media
let media ;
// compio media dividendo il valore di somma su il numero di valori 
media = (somma / 10) ; 
// assegnazione
document.getElementById("contenuto_somma").innerText=`questa è la somma dei numeri ${somma}`
document.getElementById("contenuto_media").innerText=`questa è la media dei numeri ${media}`