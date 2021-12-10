const texto = `Lista telefonica: 
- (11) 98765-1212
- 9876-4321 
- (85) 99988-7766
- (21)3261-8899
`;

console.log(texto.match(/\(?\d?\d?\)? \d{4,5}-\d{4}/g)); // minha resposta

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g)); // quase...
