function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){//tam=quantidade de valores
        res+=valores[i]
    }
   // return valores.length //nao dá o resultado 15 em console.log, mas sim 2, que é a quantidade de 'itens' que tem
    return res //aqui faz com que retorne os valores da soma e não só a quantidade de itens, ou seja, em cosole.log(soma())eu posso acrescentar qnts numeros quiser
}

console.log(soma(10,5)) 


function soma1(...valores){ //array for of
    let res=0
    for(let v of valores){ //v=variavel v
        res+=v
    }
    return res
}

console.log(soma1(10,5,2,8)) //ainda posso colocar quantos valores eu quiser sem precisar mudar outra parte do codigo
    