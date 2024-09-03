const p_array=document.querySelector("#array") //esta dentro do elemento p no html
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,2,9,15,20] //tambem pode ser strings

//paragrafo que mostra os elementos array:

p_array.innerHTML="["+elementos_array+"]" // entre [] para aparecer no quadro array os numeros dos elementos

btnPesquisar.addEventListener("click",(evt)=>{ //funcionalidade do botão pesquisar
    resultado.innerHTML="Valor não encontrado" // quando a pesquisa é de um numero que nao existe, essa resposta é exibida
   const ret=elementos_array.find((e,i,)=>{ // ret=retorno, e=elemento, i=indice
        if(e==txt_pesquisar.value){ //pesquisa o valor digitado na caixa pesquisar --- se os elementos forem strings colocar: if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){ --- para que o ususario possa pesquisar tambem com letras maiusculas
            resultado.innerHTML="Valor encontrado " + e + " na posição " + i//exibe a pesquisa na caixa de resultado e=numero digitado, i=posição que o numero digitado se encontra
            return e
        }
    })
    console.log(ret)
})

