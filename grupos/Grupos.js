const texto = 'O José Simão é muito engraçado... hehehehehe';
console.log(texto.match(/(he)+/g)); // aplica quantificador 1 ou mais no grupo inteiro

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag';

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));
