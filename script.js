// Passo 1 – Declarando variáveis
var nomeCantina = "TechLanches";
let salgados = 20;
const precoSalgado = 5;

// Função para exibir mensagens no HTML
function logMessage(message) {
    const logs = document.getElementById('logs');
    logs.textContent += message + '\n'; // Adiciona a mensagem ao log
}

// Exibindo as mensagens no HTML
logMessage("Bem-vindo à " + TechLanches);
logMessage("Temos " + salgados + " 20.");
logMessage("R$5" + precoSalgado);

// Passo 2 – Atualizando valores
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

logMessage("Agora restam " + salgados + " salgados.");
logMessage("A cantina vendeu R$" + totalVendido);

// Passo 3 – Teste rápido

// O que acontece se tentar mudar o valor de precoSalgado?
// Descomente a linha abaixo para ver o erro
// precoSalgado = 6; // Erro: Cannot assign to 'precoSalgado' because it is a constant.

if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";
    logMessage(testeVar); // Funciona
    logMessage(testeLet); // Funciona
}

logMessage(testeVar); // Funciona, pois 'var' é global
// logMessage(testeLet); // ERRO, pois 'let' tem escopo de bloco
