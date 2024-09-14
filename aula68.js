//Polimorfismo --> capacidade de um mesmo método ter açoes diferentes. Um determidado objeto pode ter varios construtores diferentes

class Carro{
    constructor(tipo,estagioTurbo){
        this.turbo=new Turbo(estagioTurbo){
        if(tipo==1){
            this.velMax=120+this.turbo
        }
        }
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50 //potencia
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
    }
  }
}
