const numbers = [];

for(let i=0 ; i<10;i++)
{
    
    let number = prompt("inserire il numero di cui si vuole fare la somma.")

    numbers.push(Number(number) );

}
console.log(numbers);

let somma = 0;

for(let j=0 ; j<numbers.length;j++)
{
    somma += numbers[j];
   
}

document.getElementById("risultato").innerText=`Questo è il risultato della somma ${somma}`;