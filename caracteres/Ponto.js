// . é um coringa, valido para apenas uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'; // ponto pode ser substituido por qualquer caracter na expressao
// apenas 1 caracter

console.log(texto.match(/1.2/g));
console.log(texto.match(/1..2/g)); // nao retorna pq nao ha '2' depois de dois elemetos a partir do '1'
console.log(texto.match(/1..,/g)); // retorna o valor pq tem dois elementos antes da virgula

const notas = '8.3,7.1,8.8,10.0';
console.log(notas.match(/8../g)); // o ponto tambem serve para o ponto literal
console.log(notas.match(/.\../g)); // traz todos mas o 10.0 fica 0.0 pois só há um ponto meta antes do ponto literal
