const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));
// ele guarda a info do \w neste exemplo e eu posso referenciar este valor com o retrovisor \1 onde o numero e qual grupo eu desejo pegar

const texto2 = 'Lentamente é mente muito lenta.';
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));
// aqui o primeiro grupo é lenta e esta referenciado pelo \1 e o segundo é mente e ref. \2

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)); // o ?: não guarda o valor do grupo

console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'));

// teste suporta mais de 9 retrovisores
const texto3 = 'abcdefghijkll';
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));
