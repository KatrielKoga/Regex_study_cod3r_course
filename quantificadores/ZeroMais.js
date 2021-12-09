const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// * -> zero ou mais
const regex = /fogo*/gi; // aqui pode ter 0 ou mais ocorrencias do valor "o"
console.log(texto1.match(regex));
console.log(texto2.match(regex));
