const texto = '1,2,3,4,5,6,a.b c!d?e[f';

console.log(texto.match(/[a-z]/g)); // - demonstra intervalo de caracteres
console.log(texto.match(/[b-d]/g)); // inclui as bordas na pesquisa
console.log(texto.match(/[2-4]/g));
console.log(texto.match(/[A-Z1-3]/gi)); // pode ser utilizado com diferentes tipos de caracteres
