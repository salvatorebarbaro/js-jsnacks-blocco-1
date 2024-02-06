// variabile n inseirta da utente
const n = prompt("inserisic fino a che numero dobbiamo eseguire il cubo");
// dichiarazione array
const numbers=[];
// ciclo for
for(let i=1;i<=n ;i++ )
{
    // dichiarazione di cubo
    let cubo = i*i*i ;
    // inserimento dentro l'array del valore numerico
    numbers.push(Number(cubo));
}
document.getElementById("contenuto_array").innerText=`questi sono i valori presenti nell'array di cui abbiamo fatto il cubo ${numbers}`;