// dichiarazione array vuoto
const numbers = [];
// ciclo con cui noi andremo a chiedere in modo automatico all' utente un valore  
for(let i = 0; i<6; i++ )
{
    // valore dato dall'utente
    let number = prompt("inserire un numero, grazie" );
    
    if(number % 2 != 0)
    {
        // inserimento valore nell'array
        numbers.push(Number(number));
        console.log(numbers);
    }

}

const risultato =document.getElementById("contenuto_array");

risultato.innerText=`elementi dispari inseriti ${numbers}`;

