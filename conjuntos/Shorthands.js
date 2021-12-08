const texto = `1,2,3,4,5,6a.b c!d?e	-\r\f
f_g`;

console.log(texto.match(/\d/g)); // \d traz apenas digitos (números)
console.log(texto.match(/\D/g)); // \D qualquer coisa menos digitos (números)

console.log(texto.match(/\w/g)); // \w traz caracteres => [a-zA-Z0-9_]
console.log(texto.match(/\W/g)); // \w traz não caracteres => [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)); // traz espaços em branco => [ \r\t\n\f]
console.log(texto.match(/\S/g)); // traz não espaços em branco => [^ \r\t\n\f]

// \b \B  futuro...
