const texto =
	'Romário era um excelente jogador\n, mas hoje é um politico questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // ^ significa inicio da linha/string
console.log(texto.match(/r$/gi)); // $ significa fim da linha/string

console.log(texto.match(/^r.*r$/gi)); // problema do dotall

// . não resolve para \n
