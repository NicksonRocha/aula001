// Definir variavel caixa
let caixa = document.getElementById('caixa');

// Adicionar eventos com o mouse na variavel caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar função da variavel clicar (Ativa quando o mouse passar dentro da div)
function clicar() {
    caixa.innerHTML = 'Você clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'white';
}

// Criar função da variável entrar (Ativa quando o mouse passar dentro da div)
function entrar(){
    caixa.innerHTML = ' Você Entrou';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black';
}

// Criar função da variável sair (Ativa quando o mouse passar dentro da div)
function sair(){
    caixa.innerHTML = '<strong>PASSE O MOUSE</strong>';
    caixa.style.background = 'green';
    caixa.style.color = 'white';
}

// Pegar a data atual do computador
let agora = new Date();
// Pegar o dia da semana em valore númericos
let diaSemana = agora.getDay();
// Pegar o id da div
let data = document.getElementById('data');

// switch(diaSemana){
//     case 0: 
//         data.innerHTML = 'Domingo';                                                                                     
//         data.style.background = 'black';
//     break;

//     case 1:
//         data.innerHTML = 'Segunda-feira';
//         data.style.background = 'white';
//     break;
    
//     case 2:
//         data.innerHTML = 'Terça-feira';
//         data.style.background = 'orange';
//     break

//     case 3:
//         data.innerHTML = 'Quarta-feira';
//         data.style.background = 'red';
//     break

//     case 4:
//         data.innerHTML = 'Quinta-feira';
//         data.style.background = 'yellow';
//     break

//     case 5:
//         data.innerHTML = 'Sexta-feira';
//         data.style.background = 'gray';
//     break

//     case 6:
//         data.innerHTML = 'Sábado';
//         data.style.background = 'blue';
//     break

//     default:
//         console.log('Dia inválido');
//     break;
// }

if(diaSemana == 0){
    data.innerHTML = ('Domingo');
    data.style.background = ('Black');
} else if(diaSemana == 1){
    data.innerHTML = ('Segunda-feira');
    data.style.background = ('blue');
} else if(diaSemana == 2){
    data.innerHTML = ('Terça-feira');
    data.style.background = ('red')
} else if(diaSemana == 3){
    data.innerHTML = ('Quarta-feira');
    data.style.background = ('yellow')
} else if(diaSemana == 4){
    data.innerHTML = ('Quinta-feira');
    data.style.background = ('pink')
} else if(diaSemana == 5){
    data.innerHTML = ('Sexta-feira');
    data.style.background = ('orange')
} else if(diaSemana == 6){
    data.innerHTML = ('Sábado');
    data.style.background = ('gray')
} else{
    data.innerHTML = ('Data inválido');
    data.style.background = ('white');
    data.style.color = ('black')
}

let contador = 0;
let numeros = document.getElementById('contador');

while(contador < 300){
    contador++;
    numeros.innerHTML = (contador);
    numeros.style.background = ('Black');
}