function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const itc=cores()     //it=iterator da função c=cores

console.log(itc.next().value) //next=proxima execução da função. value=retorno do yield - chama o primeiro yield

console.log(itc.next().value) //ele volta de onde parou, ou seja, chama o segundo yield, no caso o 'verde'

console.log(itc.next().value) //volta novamente de onde parou e chama o proximo yield, no caso, o azul

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp=perguntas() //it=iterator p=perguntas
console.log(itp.next().value)
console.log(itp.next("Bruna").value)
console.log(itp.next("Natação").value)

function* numeral(){
    let i=0
    while(true){ //loop infinito
        yield i++
        if(i>5)
            break //pausando o contador quando 'i' chegar a 5 pra nao contar infinitamente
    
    }
}
    const itn=numeral()
    for(let c of itn){
        console.log(c)
    }
