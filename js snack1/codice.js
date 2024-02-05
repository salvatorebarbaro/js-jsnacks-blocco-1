// richiesta delle 2 parola 
// analisi delle 2 parole tranite delle condizioni
// stampaggio delle parole 

// dichiarazione pirma variabile inserita da user
let parolauser1 = prompt("inserire la prima parola da analizzare");
// dichiarazione seconda variabile inserita da user
let parolauser2 = prompt("inserire la seconda parola da analizzare");

if(parolauser1.length > parolauser2.length)
{
    document.getElementById("prima_parola").innerText = `Questa è la parola più lunga ${parolauser1}`;
    document.getElementById("seconda_parola").innerText = `Questa è la parola più corta ${parolauser2}`;
}
else
{
    document.getElementById("prima_parola").innerText = `Questa è la parola più lunga ${parolauser2}`;
    document.getElementById("seconda_parola").innerText = `Questa è la parola più corta ${parolauser1}`;
}