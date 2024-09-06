// Método Reduce - permite fazer redução do array, que vem do cod que especificar,


const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    dobro.push(elementos_array[0]*2)//pega o dobro dos elementos que estão no array a partir do número0
    resultado.innerHTML=elementos_array.reduce((anterior,atual,posição)=>{ //a soma tem a seguinte logica: anterio 0 (subentende-se antes de 1), então 0+1=1 1(anterior)+2(atual)=3 3(anterior)+3(atual)=6 6(anterior)+4(atual)=10 10(anterior)+5(atual)=15, seguindo a sequencia dos elementos_array
        ant.push(anterior) 
        atu.push(atual)//vai aparecer o resultado da soma dos numeros dos elementos array 
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+="<br/>Valor anterior: "+ant+"<br/>Valor atual: "+atu+"<br/>Dobro: "+dobro  
})