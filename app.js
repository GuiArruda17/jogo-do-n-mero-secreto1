alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 40
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1 ;


//while é usado quando o chute nao for igual o N.Secreto
// != expressão quando for diferente 
while (chute != numeroSecreto) {
    chute= prompt(`Escolha um numero entre 1 a ${numeroMaximo}`)
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que o ${chute}`);
        } else {
            alert(`o numero secreto é  maior que o ${chute}`)
        }
        tentativas++
    }
}
//operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)
// if (tentativas >1){
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

//sinais de operadores: nao é igual: !=
                    // igual: == 
                    // maior: >
                    // menor: <
