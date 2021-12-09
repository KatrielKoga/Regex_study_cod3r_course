const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// ? -> zero ou um ( opcional )
const regex = /fogo?/gi; // aqui pode ter 0 ou 1 ocorrencia do valor "o" por causa do opcional
console.log(texto1.match(regex));
console.log(texto2.match(regex));