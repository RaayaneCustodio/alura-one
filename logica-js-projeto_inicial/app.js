alert("Boas Vindas ao jogo do numero secreto");
let numeroSecreto = 19;
let chute;


// Enquanto chute nao for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 30")

    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} `);
        console.log(numeroSecreto)
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }

    }
}
//se chute for igual ao numero secreto
