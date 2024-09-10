//Herança em Poo --> herança é qnd uma classe herda outra classe... a clase pai cede metodos e propriedades para classes filhos, tudo que é implementado na classe pai passa pra classe filho

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

class Utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
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

const c3=new Utilitario("Tiida",4,5)


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

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Lugares: ${c3.lugares}`)
console.log("------------------------")