//Abstract --> termo de orientação a objetos --quando tem uma classe abstrata não pode ser instanciada, so serve de base pra outras classes, só pode ser extendida, serve como herança e classe base para outras bases

class CarroPadrao{ //todo carro vai herdar essa classe
    //para ser uma classe abstrata -- todas as classes terão essas especificações
    constructor(){
        if(this.constructor===CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada")  //throw=excessão , tipo de excessão=erro
        }
        //tornar obrigatório a implementação de um método:
        if(this.ligar===undefined){
            throw new TypeError("É obrigatório implementar o método Ligar")
        }
        if(this.desligar===undefined){
            throw new TypeError("É obrigatório implementar o método Desligar")
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
    
}

class Carro extends CarroPadrao{
      constructor(tipo,estagioTurbo){
        super()
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
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log("-----------")
       }
       ligar(){
        this.ligado=true //implementando o método ligar que foi exigido na class CarroPadrao
       } 
       desligar(){
        this.desligado=false //implementando o método desligar que foi exigido na class CarroPadrao
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
class CarroEspecial extends Carro{ //herda a classe carroPadrao
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
//const c4=new CarroPadrao() // no console vão dar o erro que essa classe nao pode ser instanciada (pq ela foi definida como abstrata), ou seja, ela vai definir valores para outras classes, mas ela nãopode ser "chamada"


c1.info()
c2.info()
c3.info() //info que tá definido no pai