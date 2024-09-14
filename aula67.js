//PROTOTYPE  --> Usado quando aprecisa add propriedade ou método a um objeto (principalmente de for de função)

const Nave=function(energia){
    this.energia=energia
    this.disparos=100
}

const n1=new Nave(170)

//add novas propriedades
Nave.prototype.vidas=3 //no console tem que clicar na seta:nava e depois em prototype pra achar esse numero de vidas
Nave.prototype.disparar=function(){ //função para subtrair disparos
    if(this.disparos > 0){
        this.disparos-- //subtratindo disparos
    }
}

n1.disparar()
n1.disparar()
n1.disparar() //esses tres disparar subtrai 3 vezes de 100



console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)