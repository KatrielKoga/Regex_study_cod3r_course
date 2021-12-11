const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)); // procura o elemento que depois tem uma virgula
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)); // pega todos que nao tem virgula depois da palavra
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi)); // mudança para pegar o "é" pq ele é considerado borda na anterior
