// //objetos literais -- nao tem mais objetos independentes, ao criar varios objetos na mesma classe todos apontom pro mesmo endereço de memoria

// const Pessoa={
//     nome:"Bruno", //propriedade
//     getNome:function(){
//         return this.nome
//     },
//     setNome:function(nome){
//         this.nome=nome
//     }
// }

// const p2=Pessoa
// const p3=Pessoa //se quiser pessoas diferentes não se deve usar essas const


// //maneira de fazer atualizações para objetos literais
// p3.nome="Renan"  //ou:
// p2["nome"]="Fatima"
// Pessoa.setNome("Ariosvaldo")

// console.log(Pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome) //tanto p2 como p3 vão receber o nome Ariosvaldo pq sao objetos literais que apontam pro mesmo lugar, troquei todos pra renan depois todos pra fatima, depois pra ariosvaldo

const Pessoa={
    nome,
    idade,
    getNome:function() {
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNone:function(){
        return this.nome
    },
    setIdade:function(){
        return this.idade
    }
}


