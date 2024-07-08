alert("Boas Vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
let chute;
let tentativas = 1;


// Enquanto chute nao for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;

    }

}
//se chute for igual ao numero secreto

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);