//Método SOME -- Ele dá true quando pelo menos 1 dos valores do array equivaler ao que se pesquisa (diferente de every que tem que ter todos os elementos true)

const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[16,12,10,17,15,13,11,19]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.some((e,i)=>{ //verifica se nos elementos_array tem pelo menos um valor que seja maior de 18, se houver o retorno vai ser ok, nesse caso o valor esta na ultima posição e mesmo assim ele retorna com ok
        if(e<18){ 
            resultado.innerHTML="Array não conforme na posição " +i //aqui essa mensagem nao vai aparecer pq nos elementos tem pelo menos 1 resultado equivalente a pesquisa
        }
        return e>18
    })
    if(ret){
        resultado.innerHTML="OK"
    }
})