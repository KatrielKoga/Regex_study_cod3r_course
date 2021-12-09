const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.';

// para definir um quantificador usa {}
console.log(texto.match(/\d{1,2}/g)); // pega elementos com um ou dois digitos, nesse caso pega o 120 tambem mas separa em 12 e 0 pq é guloso

console.log(texto.match(/[0-9]{2}/g)); // pega so elementos com dois digitos mas ainda pega o '12' de '120'

console.log(texto.match(/\d{1,}/g)); // traz elementos com 1 ou mais digitos

console.log(texto.match(/\w{7}/g)); // aqui nao entra milhões por causa do ~, ele nao entra no shorthand \w

console.log(texto.match(/[\wõ]{7,}/g)); // agora traz milhões e completa a palavra apostando

// no futuro ...
console.log(texto.match(/\b\d{1,2}\b/g)); // \b é a borda ( futuro )

console.log(texto.match(/\b[\wõ]{7}\b/g));
