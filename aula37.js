const caixa1=document.querySelector("#caixa1")
const btn_c1=document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",()=>{
    console.log("clicou") //todas as outras divs que estão dentro da div caixa1 terão o mesmo evento disparado, desse modo ele nao consegue distinguir que é apenas na div caixa1
   
})

//stopPropagation

btn_c1.addEventListener("click",(evt)=>{
    evt.stopPropagation()  //aqui eu paro o evento ao clicar apenas na div c1, mas nas outras divs o evento click ainda continua sendo propagado (consulta isso em devtools-console)
})

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        evt.stopPropagation() //aqui ele para a propagação em todos os cursos pq estou usando a classe '.curso' na const e aqui
    })
})





