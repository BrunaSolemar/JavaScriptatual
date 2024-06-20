const caixa1=document.querySelector("#caixa1")

//adicionando os cursos dinamicamente
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL"]

cursos.map((el,chave)=>{ //chave  dá a cada div uma posição




    
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})

//acrescentando uma nova div ao final das que eu ja criei
const novoElementos=document.createElement("div")
novoElementos.innerHTML="ReactNative"
novoElementos.setAttribute("id","c7") //dando i id c7 para a div
novoElementos.setAttribute("class","curso c1") //dando a classe curso c1
caixa1.appendChild(novoElementos)
