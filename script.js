// Passo 1 – Declarando variáveis

// Nome da cantina
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + techlanches);

// Quantidade de salgados disponíveis
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// Preço fixo de cada salgado
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Passo 2 – Atualizando valores

// Atualizando o número de salgados e calculando o valor vendido
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// Passo 3 – Teste rápido

// O que acontece se tentar mudar o valor de precoSalgado?
// Descomente a linha abaixo para ver o erro
// precoSalgado = 6; // Erro: Cannot assign to 'precoSalgado' because it is a constant.

// O que acontece se criar outra variável com var dentro de um bloco {}?

if (true) {
  var testeVar = "Sou var";
  let testeLet = "Sou let";
  console.log(testeVar); // Funciona
  console.log(testeLet); // Funciona
}

console.log(testeVar); // Funciona, pois 'var' é global
// console.log(testeLet); // ERRO, pois 'let' tem escopo de bloco


