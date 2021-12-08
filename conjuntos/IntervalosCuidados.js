const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // nao define range ( conjunto )

console.log(texto.match(/[A-z]/g)); // intervalos usam a ordem da tabela UNICODE
// o de cima traz alguns simbolos alem das letras

//intervalo tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)) // gera erro pq esta fora de ordem
// console.log(texto.match(/[4-1]/g)) // gera erro pq esta fora de ordem
