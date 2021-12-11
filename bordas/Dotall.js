const texto =
	'Romário era um excelente jogador\n, mas hoje é um politico questionador';

console.log(texto.match(/^r.*r$/gi)); // problema dotall
console.log(texto.match(/^r[\s\S]*r$/gi)); // precisa usar este conjunto para pegar todos os elementos

// [\s\S] pega qualquer elemento como o ponto mas pega tambem o \n
