//Continuação objetos -- substituir class por function (criar a classe atraves de uma função)

function Pessoa(pnome,pidade){
    this.nome=pnome,
    this.idade=pidade,

  
this.getNome=function(){
    return this.nome
},
this.getIdade=function(){
    return this.idade
},
this.setNome=function(nome){
    this.nome=nome
},
this.setIdade=function(idade){
    this.idade=idade
},
this.info=function(){
    console.log(`Nome: ${this.nome}`)
    console.log(`Idade: ${this.idade}`)
    console.log("-------------")
}
}

let pessoas=[] //array de pessoas

const btn_add=document.querySelector("#btn_add")
const res=document.querySelector(".res")

const addPessoa=()=>{ //para add pessoas e idades na caixinha de "resposta"
    res.innerHTML="" //limpa automaticamente o elemento antes de add uma nova informação pra nao dar resposta duplicada
    pessoas.map((p)=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
        })
}

btn_add.addEventListener("click",(evt)=>{
    //toda vez que clicar em adicionar, vai adicionar uma nova pessoa e idade no array:
    const nome=document.querySelector("#f_nome")
    const idade=document.querySelector("#f_idade")
    const p=new Pessoa(nome.value,idade.value)//o .value, significa que cada vez que clicar em add, vai sumir da caixa de digitar
    pessoas.push(p) //add o abjeto em array pessoas
    nome.value="" //--aspas em branco é pra caixa de digitar o texto abrir em branco
    idade.value=""
    nome.focus()
    addPessoa()
    console.log(pessoas)
})  
