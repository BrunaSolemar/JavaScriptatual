//Exercícios sobre Classes

const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")


let a_carros=[] //a= array_carros


f_tipoMilitar.addEventListener("click",(evt)=>{
    f_nome.value="" //sempre vai começar com valores em branco
    f_portas.value="0"
    f_blindagem.value=0 
    f_municao.value=0
    f_blindagem.removeAttribute("disabled") //quado clicar no militar, o blindagem vai habilitar para inserir valores
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value="0"
    f_blindagem.value=0 //quando selecionar o normal, os numeros que foram digitados no militar atualizam para 0
    f_municao.value=0
    f_blindagem.setAttribute("disabled","disabled") //quando clicar no normal, a blindagem vai desativar para colocar valores
    f_municao.setAttribute("disabled","disabled")

})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML="" //zera o conteudo de "carros"
    a_carros.forEach((c)=>{
        const div=document.createElement("div") //cria a div pra criar o carro
        div.setAttribute("class","carro")
        div.innerHTML=`Nome: ${c.nome}<br/>`
        div.innerHTML+=`Portas: ${c.portas}<br/>`
        div.innerHTML+=`Cor: ${c.cor}<br/>`
        div.innerHTML+=`Blindagem: ${c.blindagem}<br/>`
        div.innerHTML+=`Munição: ${c.municao}`
        carros.appendChild(div)//recebe o nome do carro
        })
    }

    btn_addCarro.addEventListener("click",()=>{
        if(f_tipoNormal.checked){ //verificar qual carro esta sendo chamado
            const c=new Carro(f_nome.value,f_portas.value) //os valores que estão sendo indicados pelo usuario
            a_carros.push(c) //add um carro ao array
        }else{
            const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value) 
            a_carros.push(c)
        }
        gerenciarExibicaoCarros()
    })
    
    class Carro{ //classe pai - Base
    
        constructor(nome,portas){
            this.nome=nome //todas essas propriedades precisam estar setadas em todos os carros
            this.portas=portas
            this.ligado=false
            this.vel=0
            this.cor=undefined //abre me branco
        }
        ligar=function(){
            this.ligado=true
        }
        desligar=function(){
            this.ligado=false
        }
        setCor=function(cor){ //para definir cor do carro
            this.cor=cor
        }
    }
    
    //conceito de herança:
    class Militar extends Carro{    //extends define que isso é uma herança --> a classe "militar" herda a classe "carro"
        constructor(nome,portas,blindagem,municao){
            super(nome,portas) //super serve para invocar algo da classe pai
            this.blindagem=blindagem
            this.municao=municao
            this.setCor("Verde")
        }
        atirar=function(){
            if(this.municao>0){
                this.municao-- //diminui o valor da munição
            }
        }
    } 
    
    const c1=new Carro("Normal",4) //-> Nome=normal, portas=4
    c1.ligar()
    c1.setCor("Preto")
    
    const c2=new Militar("Lutador",1,100,50) //--> Nome, portas, blindagem e munição
    c2.atirar() //para cada c2.atirar que acrescentar vai diminuir a quantidade de munição no console, no caso passou de 50 para 46
    c2.atirar()
    c2.atirar()
    c2.atirar()
    
        
    
    console.log(`Nome: ${c1.nome}`)
    console.log(`Portas: ${c1.portas}`)
    console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)//-> usando operador ternario, retorna sim se for true e nao se for false
    console.log(`Velocidade: ${c1.vel}`)
    console.log(`Cor: ${c1.cor}`)
    console.log("------------------------")
    
    console.log(`Nome: ${c2.nome}`)
    console.log(`Portas: ${c2.portas}`)
    console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)//-> usando operador ternario, retorna sim se for true e nao se for false
    console.log(`Munição: ${c2.municao}`)
    console.log(`Blindagem: ${c2.blindagem}`)
    console.log(`Velocidade: ${c2.vel}`)
    console.log(`Cor: ${c2.cor}`)
    console.log("------------------------")
    
    