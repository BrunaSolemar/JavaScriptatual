function aluno(nome,nota){
    this.nome=nome //variavel(this) nome, recebe o parametro nome
    this.nota=nota
    // console.log(nome)
    // console.log(nota)

    this.dados_anonimo=function(){
        setTimeout/*gera atraso na execução*/(function(){
            console.log(this.nome)//esse setTimeout nao reconhece os this ali de cima, sendo necesaario criar outros this
            console.log(this.nome)
        },2000) //vai chamar a função só depos de 2 segundo
            
    }
    //para fazer o setTimeout chamar o this deve se usar o arrow
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    
}
const al1=new aluno("Bruno",100)
al1.dados_anonimo()
al1.dados_arrow()
