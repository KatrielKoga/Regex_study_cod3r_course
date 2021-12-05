const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');
console.log('Metodos da RegExp...');
console.log(regexNove.test(texto)); // retorna boolean para a pesquisa
console.log(regexNove.exec(texto)); // retorno completo com o valor e o index

const regexLetras = /[a-f]/g;
console.log('Metodos da string...');
console.log(texto.match(regexLetras)); //retorna valores buscados em array
console.log(texto.search(regexLetras)); // encontra o indice inicial da busca
console.log(texto.replace(regexLetras, 'Achei')); // troca elementos encontrados
console.log(texto.split(regexLetras)); // remove elementos encontrados e add em array
