//Exercício de Calculadora
const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelectorAll(".res")
const display=document.querySelector(".display")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")

//bloquear para inserir mais de um operador consecultivo:
let sinal=false    //false pq nao tem nenhum sinal inicialmete

//eventos
//arrey:
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{ //evento de click nas teclas, add valor no display qnd clicadas
        display.innerHTML+=evt.target.innerHTML //innerhtml das teclas numericas

    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){  //se sinal for false, trocar para true ->
            sinal=true //qnd tem um operador pode ter um sinal de operação 
            if(display.innerHTML=="0"){ //se no display tiver 0
                display.innerHTML="" //apaga o conteudo do display
            }
            if(evt.target.innerHTML=="x"){ //se o conteudo do display for o X de multiplicação
                display.innerHTML+="*" //transforma em *    += é concatenar
            }else{ //se nao for o x
                display.innerHTML+=evt.target.innerHTML //escreve a operação na tela
            }
            
        }
        
    })
})

tlimpar.addEventListener("click",(evt)=>{ //quando clicar pega o display e limpa, voltando pra 0
    display.innerHTML="0"
})
