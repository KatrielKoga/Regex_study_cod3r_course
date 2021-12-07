// no inicio ...
// um byte (8 bits) - 256 caracteres
// Simbolos, pontuação, a-z, 0-9

// dois bytes (16 bits) - 65500+ caracteres
// +Simbolos, +pontuação, A-Z, a-z, 0-9

//Unicode
//quantidade de Byttes variável - Expansível
//suporta mais de i milhão de caracteres
//Atualmente tema mais de 100.000 caracteres atribuidos

//http://unicode-table.com/pt/

const texto = 'aʬc௵d';
console.log(texto.match(/\u02AC|\u0BF5/g));
