// . ? * + -  ^$ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexPonto = /\./g; // barra invertida é escape -> transforma o caracter "." mo exemplo em valor literal pq "." tamb é meta-caractere
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g; // pipe significa OU
console.log(texto.split(regexSimbolos));
