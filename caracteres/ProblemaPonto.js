const texto = 'Bom\ndia';
console.log(texto.match(/.../g));
console.log(texto.match(/..../g));

// o ponto nao resolve para \n
// exitste em outras linguagens a flag dotall que faz ele resolver => /exp/s
