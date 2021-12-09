const texto = '<div>Conteudo 01</div><div>Counteudo 02</div>';

// quantificadores são gulosos (greedy)
console.log(texto.match(/<div>.+<\/div>/g)); // pega as duas divs de uma vez
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// quantificadores NÃO gulosos ( lazy )
console.log(texto.match(/<div>.+?<\/div>/g)); // com o ? ele para na primeira ocorrencia que encontra
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));
