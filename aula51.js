//ITERADORES e elementos iteraveis 
//iteradores: são objetos que permitem acessar elementos de uma coleção, um de cada vez, sem expor a estrutura sebadjacente. Implementa o metodo next e retorna com duas propriedades: value e done
//coleçoes iteraveis: arrays, string, map, sets

const valores=[10,8,9,2,15,4,7,0] //é um array (coleção iteravel)
const it_valores=valores[Symbol.iterator]() //it=iterador de valores(iterador para o array valores) -- symbol.iterador é um simbolo que todos os objetos iteraveis possuem, Ela contem a função que retorna um iterador para aquele objeto, ou seja, qnd acessa "valres[symbol.iterator]", pega a função que vai gerar o iterador para valores


console.log(valores)
console.log(it_valores.next()) //retorno: value: 10, done: falese, indica que o valor é 10 e a iteração ainda nao acabou, por isso dá done:false
console.log(it_valores.next()) //o next() obtem o proximo valor da sequencia iteravel, quando retorna "false" signigfica que ainda tem mais vallores pra iterar, quando retorna "true" signigica que a iteração terminou e nao há mais valores
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next()) //retorno: value:undefined, done: true, indique que ele já percorreu todos os numeros e não tem mais nenhum, por isso undefined e o done:true é porque a iteração acabou


const texto="YouTube" //string
const it_texto=texto[Symbol.iterator]()  


console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
