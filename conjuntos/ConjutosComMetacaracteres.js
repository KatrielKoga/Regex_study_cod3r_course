const texto = '.$+*?-';

console.log(texto.match(/[.$+*?]/g)); // dentro de conjunto os meta caracteres se comportam como literal, não precisa adicionar o escape "\"
console.log(texto.match(/[$-?]/g)); // isso é intervalo (range)

//NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g)); // é utilizado o escape no "-"
console.log(texto.match(/[-?]/g)); // sem elementos em volta "-" se torna literal

// IMPORTANTE
//pode precisar de escape dentro do conjunto: - [ ] ^
