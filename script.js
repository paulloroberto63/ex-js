let numberOne = prompt("insira o primeiro número");
let numberWho = prompt("insira o segundo número");

numberOne = Number(numberOne)
numberWho = Number(numberWho)

let toCheck = numberOne == numberWho;



let sum = numberOne + numberWho;
let sub = numberOne - numberWho;
let mult = numberOne * numberWho;
let div = numberOne / numberWho;
let restdiv = numberOne % numberWho;


let total = sum % 2 == 0 ? 'par' : 'impar';


alert(`sua soma é: ${sum}`)
alert(`sua subtração é: ${sub}`)
alert(`sua multiplicação é: ${mult}`)
alert(`sua divisão é: ${div}`)
alert(`seu resto da divisão é: ${restdiv}`)
alert(`a soma de ${sum} é ${total}`)


if(toCheck) {
    alert("O número inserido é igual")   
}

else {
    alert("O número inserido é diferente")
}