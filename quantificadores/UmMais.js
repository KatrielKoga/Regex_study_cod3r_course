const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// + -> um ou mais
const regex = /fogo+/gi; // pega fogo e fogooooo... pq precisa ter 1 ou mais letras "o"
console.log(texto1.match(regex));
console.log(texto2.match(regex)); // retorna null pq no 'fog' nao tem o "o"

const texto3 = 'Os números: 0123456789';

console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/[0-9]+/g)); // com o mais ele procura a maior ocorrencia do valor no conjunto, traz todos elementos juntos

// mesma coisa usando shorthand
console.log(texto3.match(/\d/g));
console.log(texto3.match(/\d+/g));
