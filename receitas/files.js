const fs = require('fs');

const read = nomeArquivo => {
	return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, {
		encoding: 'utf8',
	});
};

const write = (nomeArquivo, conteudo) => {
	const dirname = `${__dirname}/alterados`;
	if (!fs.existsSync(dirname)) {
		fs.mkdir(dirname);
	}

	fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, {
		encoding: 'utf-8',
	});
};

module.exports = { read, write };
