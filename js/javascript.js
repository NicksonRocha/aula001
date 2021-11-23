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
