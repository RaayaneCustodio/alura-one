alert("Boas Vindas ao jogo do numero secreto");
let numeroSecreto= 19;
let chute = prompt("Escolha um número entre 1 e 30");

if (chute == numeroSecreto){
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} ` );
    console.log(numeroSecreto)
} else {
    alert("Você errou ! :(")
}