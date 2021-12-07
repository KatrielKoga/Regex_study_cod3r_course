const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// para definir ua classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g; // aqui busca este conjunto de caracteres
const regexPares2 = /02468/g; // nesse caso nao encontra pq ele busca elemetos literal um do lado do outro
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]/g;
console.log(texto2.match(regexComESemAcento));
