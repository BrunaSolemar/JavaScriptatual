//Template Strings -- Uma forma de tratar strings, permite interpolação de variaveis e criação de de strings com varias linhas sem precisar de cocatenações complicadas, podendo misturar variaveis e texto de forma facil e legivel sem precisar usar o operador "+"

const caixa=document.querySelector("#caixa")

const curso="JavaScript"
const canal="CFB Cursos"
//const frase="Este é o curso de " + curso + " do canal " + canal   --- assim seria feiro sem template
//com tamplate string:

const frase=`Este é o\n curso de ${curso} do canal ${canal}` //entre aspas, s

caixa.innerHTML=frase


const carros=["Polo","Golf","T-Cross","HRV"] //criando uma lista de strings
let ul=`<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+=`</ul>`

caixa.innerHTML=ul