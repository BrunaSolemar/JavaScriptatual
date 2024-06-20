const caixa1=document.querySelector("#caixa1")

//adicionando os cursos dinamicamente
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

cursos.map((el,chave)=>{ //chave  dá a cada div uma posição
  
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    const btn_lixeira=document.createElement("img") //addicionando uma imagem que deve estar na mesma pasta dos arquivis
    btn_lixeira.setAttribute("src","lixeira.png")
    btn_lixeira.setAttribute("class","btn_lixeira")//editando a imagem que está no css
    btn_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)//o target procurou o pai da imagem pra quando clicar na imagem da lixeira remover o botão todo, mas quando clica fora da lixeira nao acontece nada
    })
   



    // novoElemento.addEventListener("click",(evt)=>{ //adicionando um escutador (listener) pra ação click
    // //   caixa1.removeChild(evt.target)//remove os botões que eu clicar
    // })


    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})

