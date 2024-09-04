//every procura por equivalencia, se todos os elementos de um array equevalem com a função ou com a regra especificada, se todos os elementos equivalerem é true senão é false



const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[21,25,19,20,16,18,22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
       const ret=elementos_array.every((e,i)=>{ // ret=retorno   --  verificar todas as idades e retorna ok quando TODOS os elementos tiverem em conformidade com a regra
        if(e<18){ //se a idade for menos que 18
            resultado.innerHTML="Array não conforme na posição " + i // i=posição
        }
        return e>=18 // se a idade for maior de 18   -  e=elemento 
    })
    if(ret){
        resultado.innerHTML="Ok"
    }
    
})