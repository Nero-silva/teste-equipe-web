function jogar(escolhajg) {
    const escolhacpt = ["papel", "tesoura", "pedra"];
    const jogocpt = escolhacpt[Math.floor(Math.random() * escolhacpt.length)];
    if (escolhajg === "pedra" && jogocpt === "papel" ||
        escolhajg === "tesoura" && jogocpt === "pedra" ||
        escolhajg === "papel" && jogocpt === "tesoura"){
        console.log("O computador escolheu " + jogocpt + " VOCE PERDEU")}
    else if (escolhajg === jogocpt) {
        console.log("O computador escolheu " + jogocpt + " Empate")
    }
    else {
        console.log("O computador escolheu " + jogocpt + " VOCE GANHOU")
    }
}