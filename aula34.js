const c1=document.getElementById("c1")

const msg=()=>{
    alert("clicou")
}

//c1.addEventListener("click",msg) //quando clica no primeiro botão (c1, no caso), abre a janeça de alerta escrito: clicou

c1.addEventListener("click",(evt)=>{ //evt=evento
    const el=evt.target //el=elemento    target=mostra o elemento que disparou o evento
    el.classList.add("destaque") //destaque=configurações no css =>está mudando a cor do botão
    msg() //está chamando o alert
}) 

const cursos=[...document.querySelectorAll(".curso")] //aqui estamos alterando a cor de fundo com o "destaque" em todos os botões

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.id + " foi clicado") //mostra no devtools(console) que a div foi clicada com a msgm exemplo; c1 foi clicado
        console.log(el.innerHTML + " foi clicado") //mostra no devtools o conteudo do botao que foi clicado exemplo: css foi clicado
    })
})