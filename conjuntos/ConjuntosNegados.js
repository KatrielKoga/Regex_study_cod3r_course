const texto = '1,2,3,a.b c!d?e[f';

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g)); // traz o mesmo que o de cima... "^" nega o que esta dentro do conjunto

console.log(texto.match(/[^\d!\?[\s,\.]/g));

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

console.log(texto2.match(/[^!-/:-@\s]/g));
