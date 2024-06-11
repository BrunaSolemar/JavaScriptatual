const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val)
            res+=v
        return res //retorno da função somar
    }
    return somar(valores)//a funcão soma ta retornando o retorno da funcao somar
}
console.log(soma(10,5,15))