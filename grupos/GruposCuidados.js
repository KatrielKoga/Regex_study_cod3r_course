const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

console.log(texto.match(/[(abc)]/gi)); // NÃO É GRUPO
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/(abc)/gi));

// dentro de conjunto não existe grupo
