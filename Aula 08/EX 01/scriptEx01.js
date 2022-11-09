// Aqui vai calcular a idade e vai dizer quantos anos uma pessoa vai ter daqui x anos
function calculadoraIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
};
// Aqui mostra quantos anos tem a pessoa 1, 2 e 3
const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};
/* Aqui mostra com quantos anos a pessoa 3 vai ter daqui 40 anos 
e quantos anos a pessoa 2 vai ter daqui 24 anos */
console.log(calculadoraIdade.call(pessoa3, 40));
console.log(calculadoraIdade.apply(pessoa2, [24]));

//==============================================================
alert(calculadoraIdade.call(pessoa3, 40));
alert(calculadoraIdade.apply(pessoa2, [24]));