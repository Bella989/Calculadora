// criação e referenciação de elementos utilizados
let display = document.getElementById('display')
let espresao = "0";
let aspas = 0;
let historico = [];

// apagando ultimo valor digitado
const apagar = () => {
    if (espresao.length > 1){
        espresao =  espresao.substring(0, espresao.length -1); 
    }else{
        espresao = 0; // redefinindo valor para 0 quando esvaziar a espresao
    }
    display.innerHTML = espresao; // atualizando o display
}

// limpando espresão
const limpar = () => { 
    espresao = 0; 
    display.innerHTML = espresao; // atualizando o display
}

// adicionando numeros ao display
const numero = (num) => { 
    if (espresao == 0){
        espresao = num;
    }else{
        espresao += num; 
    }
    display.innerHTML = espresao; // atualizando o display
}

// adicionando operador se o display não estiver vazio
const operador = (operador) => {
    if (espresao !== 0){ 
        espresao += operador;
    }
    display.innerHTML = espresao; // atualizando o display
}

// abrindo as aspas
const aAspas = () =>{
    if (espresao == 0){ 
        espresao = "(";
    }else{
        espresao += "*(";
    }
    aspas += 1; // almentando o numero de aspas abertas
    display.innerHTML = espresao; // atualizando o display
}

// feichando as aspas se elas estiverem abertas
const fAspas = () =>{
    if (aspas > 0){ 
        espresao += ")*";
        aspas -= 1; // diminuindo o numero de aspas abertas
    }
    display.innerHTML = espresao; // atualizando o display
}

 // calculando o resultado
const calcular = () => {
    let resultado = eval(display.innerHTML);
    historico[historico.length] = (espresao+" = "+resultado); // salvando a conta
    espresao = 0; // limpando o display
    console.log(historico); // exibindo o historico no console
    display.innerHTML = resultado; // inserindo o resultado no display
}
