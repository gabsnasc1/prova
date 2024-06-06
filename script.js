//Exercício1

let nome = document.getElementById("nome");
let mensagem = document.getElementById("mensagem");

function aperte()
{
    mensagem.innerHTML ="olá ," + nome.value + " tudo bem ?? ";
}

//Exercício2

let centimetros = document.getElementById("centimetros")
let conversao = document.getElementById ("conversao")

function calcular()
{
    conversao.innerHTML = parseInt(centimetros.value)/100
}

//Exercicio3

let numero = document.getElementById("num")
let posições = document.getElementById ("posições")

function sequencia()
{

}

//Exercício4
let w = document.getElementById("num1")
let y = document.getElementById("num2")
let z = document.getElementById("maiorvalor")

function maior()
{
    if(num1.value < num2.value)
    {
        z.innerHTML = num2.value
    }

    else 
    {
        z.innerHTML = num1.value
    }
}


//exercício5
let salario  = document.getElementById("valorsalario")
let aumento  = document.getElementById("aumento")

function aumentar()
{
    if(valorsalario.value > 1250)
     {
        aumento.innerHTML = parseInt (valorsalario.value)*0.20 + parseInt (valorsalario.value)
     }

     else 
     {
        aumento.innerHTML = parseInt (valorsalario.value)*0.15 + parseInt (valorsalario.value)
     }
}

//exercício6
b1 = 1
while(b1 <= 100)
    {
        console.log(b1)
        b1 = b1 + 1;
    }

//exercício7
b2 = 0
while(b2 <= 50)
    {
        console.log(b2)
        b2 = b2 + 5;
    }

//exercício8
b3 = 100
while(b3 >= 0)
    {
        console.log(b3)
        b3 = b3 - 10;
    }