const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_transferir")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{ //traduzindo: o elemento(el), vai sofrer um evento (addEventListener), quando for clicado(click)
        const curso=evt.target //o elemento 'curso'(que é o elemento alvo) que foi clicado, vai retornar um evento
        curso.classList.toggle("selecionado")//toggle=se um elemento nao tem a classe selecionada ele add, ou seja, permite que um elemento mude estilo de forma dinamica. Nesse caso aqui, quando clicado em cima do botão do curso ele vai mudar de cor, e quando clicado novamente ele volta a cor original, ou seja, add e tirando a classe do ".selecionado"

    })
})

btn.addEventListener("click",(evt)=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")] //dos elementos da classe curso, vai trazer os não(not) selecionados(.selecionado)
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el) //anexa um filho ao elemento caixa2, ou seja, ele vai copiar o que está na caixa1 e transferir para caixa2
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el) //aqui estou voltando os cursos que transferi pra caixa2 para caixa1, porem eles nao podem estar selecionados, ou seja, não podem estar "clicados"
        
})
})
