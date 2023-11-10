let resultado = partidas(110,10)


function partidas(vitoria,derrota) {
    let somatoria = vitoria - derrota
    return somatoria
}

if (resultado <= 10 ) {
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de ferro")
}
else if (resultado <= 20){
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de Bronze")
}
else if (resultado <= 50){
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de Prata")
}
else if (resultado <= 80){
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de Ouro")
}
else if (resultado <= 90){
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de Diamante")
}
else if (resultado <= 100){
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de Lendario")
}
else{
    console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de Imortal")
}


