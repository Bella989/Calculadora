// criação e referenciação de elementos utilizados para o funcionamento da calculadora
let display = document.getElementById('display')
let espresao = "0";
let aspas = 0;
let historico = [];


const apagar = () => {
    if (espresao.length > 1){
        espresao =  espresao.substring(0, espresao.length -1); // apagando ultimo valor digitado
    }else{
        espresao = 0; // redefinindo valor para 0 quando não ouver informação digitada
    }
    display.innerHTML = espresao; // atualizando o display
}
const limpar = () => { 
    espresao = 0; // limpando espresão
    display.innerHTML = espresao; // atualizando o display
}

const numero = (num) => { // adicionando numeros ao display
    if (espresao == 0){
        espresao = num; // adicionando informação á espresão
    }else{
        espresao += num; // adicionando informação á espresão
    }
    display.innerHTML = espresao; // atualizando o display
}

const operador = (operador) => {
    if (espresao !== 0){ // adicionando operador se o display não estiver vazio
        espresao += operador; // adicionando informação á espresão
    }
    display.innerHTML = espresao; // atualizando o display
}

const aAspas = () =>{ // abrindo as aspas
    if (espresao == 0){ 
        espresao = "("; // adicionando informação á espresão
    }else{
        espresao += "("; // adicionando informação á espresão
    }
    aspas += 1; // almentando o numero de aspas abertas
    display.innerHTML = espresao; // atualizando o display
}
const fAspas = () =>{
    if (aspas > 0){ // feichando as aspas se elas estiverem abertas
        espresao += ")"; // adicionando informação á espresão
        aspas -= 1; // diminuindo o numero de aspas abertas
    }
    display.innerHTML = espresao; // atualizando o display
}

const caucular = () => {
    let resultado = eval(display.innerHTML); // calculando o resultado
    historico[historico.length] = (espresao+" = "+resultado); // salvando a conta
    espresao = 0; // limpando o display
    console.log(historico); // exibindo o historico no console
    display.innerHTML = resultado; // inserindo o resultado no display
}
