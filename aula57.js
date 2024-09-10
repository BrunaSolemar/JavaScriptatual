//Entendo Objetos -- é uma coleção de dador (propriedades) e ações (métodos) organizados de forma que possa acessar e manipular facilmete.É util para organizar informações complexas de forma simples. As chaves sao propriedades de os valores sao qualquer tipo de dado (numeros, strings, arrays, funçoes, etc).

class  Pessoa{
    constructor(){ //método construtor automaticamente chamado quando estancia um novo objeto dessa classe
        this.nome="Bruno" //propriedade=nome valor=Bruno
    }
}

let p1=new Pessoa() //esse parenteses faz referencia direta ao parenteses da class -- o new esta instanciando o objeto da classe (chamando e execultado o construtor nesse caso)

console.log(p1.nome)




class Pessoas{
    constructor(pnome){  //construtor está instanciado com o nome, assim devo instanciar os () dos new Pessoas
        this.nome=pnome
    }
}

let p2=new Pessoas("Bruna") //coloquei nome aqui pq o contrutor está instamciado -- pode ser passado qualquer valor, nao somente string
let p3=new Pessoas("Renan")

console.log(p2.nome)
console.log(p3.nome)

 
//aula 58, continuação da 57  -- aprendendo funções em objetos

class Carro{
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(ptipo==3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=180
        }
    }  
    getNome() { //Métodos para obter propriedades do objeto
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){ //retornando tudo em array
        return[this.nome,this.tipo,this.velmax]
    }

    setNome(nome){ //mudando o nome da propriedade
        this.nome=nome
    }

    info(){
        //console.log("Nome: " + this.nome) ---> método sem template string
        console.log(`Nome: ${this.nome}`) //-->Método com Template String
        console.log("Tipo: " + this.tipo)
        console.log("V.Max: " + this.velmax)
        console.log("------------------")
    }
}
let c1=new Carro("Rapidão",1) // rapidão=nome 1=tipo->Esportivo
let c2=new Carro("Super Luxo",2) //2=tipo->Utilitario
let c3=new Carro("Bombadão",4) //4=tipo->Militar
let c4=new Carro("carrego tudo",3) //3=tipo->Passeio

console.log(c1.nome)
console.log(c2.nome)
console.log(c3.nome)
console.log(c4.nome) //=>bombadão
console.log(c4.tipo) //=>militar
console.log(c4.velmax)//=>160

c1.info() //imprime os dados (do c1) que eu pedi em info
c2.info()


console.log(c1.getNome())
console.log(c1.getTipo())

console.log(c2.getInfo()) //retorno de array com todas as propriedades do carro (super luxo, utilitario, 100)
console.log(c2.getInfo()[0]) // retorna apenas a propriedade do indice 0 (super luxo)

c1.setNome("Super Veloz") //alterando de rapidao para super veloz