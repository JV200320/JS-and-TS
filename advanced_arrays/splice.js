const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
// nome.splice(índice, delete, elem1, elem2, elem3)
// A partir do índice remove delete items contando com o item do índice especificado
// e adiciona os elementos passados no lugar dos que sairam
// O índice pode ser negativo, porém a quantidade de elementos a serem removidos não

nomes.splice(-2, 2, 'Teste', 'Opa')
console.log(nomes)
nomes.splice(1, 2, 'Eita', 'BBS')
console.log(nomes)
