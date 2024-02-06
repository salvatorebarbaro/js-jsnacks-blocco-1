// richiesta variabile 
const number= prompt("inserisci un numero di cifre");
// primo ciclo di controllo per verificare la lunghezza che sia maggiore di 3
if( number.length < 4 || isNaN(number))
{
    // messaggio di errore
    alert("inserisci di nuovo il numero perchè questo non è corretto")
}

else
{
    // dichiarazione variabile di somma
    let somma =0;

    // ciclo per sommare i miei fattori 
    for(let i=0 ; i< number.length; i++)
    {
        // somma "automatizzata "
        somma += Number(number[i]);
    }

    // collegamento per vedere risultato in pagina
    document.getElementById("contenuto_array").innerText=`Questa è la somma di cartteri del tuo numero ${somma}`;


}