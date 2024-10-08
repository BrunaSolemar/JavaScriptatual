//Polimorfismo --> capacidade de um mesmo método ter açoes diferentes. Um determidado objeto pode ter varios construtores diferentes

class Carro{
    constructor(tipo,estagioTurbo){
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="Normal"
        }else if(tipo==2){
            this.velMax=160
            this.nome="Esportivo"
        }else if (tipo==3){
            this.velMax=200
            this.nome="Super Esportivo"
        }
        this.velMax+=this.turbo.pot
       }
       info(){ //função para gerar as informações do carro
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("-----------")
       }
    }


class Turbo{
    constructor(e){ //e=estágios do turbo
        if(e==0){
            this.pot=0 //pot=potencia
        }else if(e==1){
            this.pot=50 
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
    }
  }
}

//criando um novo carro:
class CarroEspecial extends Carro{ //herda a class Carro
    constructor(estagioTurbo){
        //chamando o construtor do pai, passando o tipo e estágio do turbo
        super(4,estagioTurbo) //definindo o tipo 4 que não foi definido no class Carro
        this.tipoInfo=1
        this.velMax=300+this.turbo.pot
        this.nome="Carro Especial"
    }
    //criando um novo info, entrando com conceito de polimorfismo
    info(){ 
        if(this.tipoInfo==1){
            super.info()//chama os info do console.log acima
        }else{ //senão chama um novo info (substitui os console.log lá de cima por uma nova informação)
             console.log(`Nome: ${this.nome}`)
        console.log(`Vel Max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log("----------")
        }
       
    }
}

const c1=new Carro(1,0) //1=tipo   0=turbo ---> recebe os valores da class Turbo
const c2=new Carro(1,1)
const c3=new CarroEspecial(3) //Não precisa passar o tipo, só o estágio do turbo

c1.info()
c2.info()
c3.info() //info que tá definido no pai