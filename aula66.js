//Membros Static em JS e POO --> Static pode criar métodos ou atributos, conseguingo invocar um deles desde que te instanciado uma classe, é como se eles pertencessem a essa classe e não aos objetos (instancias), se definir o valor de um atrinuto Static da classe, todas as instancias da classe vão ler o mesmo valor

class Npc{
    static alerta=false  //alerta para classe (atributos, propriedades)
    constructor(energia){
        this.energia=energia
        // this.alerta=false    ---> sem o static precisarua usar esse codigo para alerta, mas teria que criar 1 alerta pra cada npc
    }
    info=function(){
        console.log(`Energia: ${npc1.energia}`)
        //  console.log(`Alerta: ${(this.alerta?"Sim":"Não")}`) ---> sem o static precisarua usar esse codigo para alerta, mas teria que criar 1 alerta pra cada npc
        console.log(`Alerta: ${(Npc.alerta?"Sim":"Não")}`)
        console.log("-----------------")
    }
        
    //definir metodos estáticos:   --- pertence a classe e nao as instancias da classe
    // static alerta=function(){
    //     Npc.alerta=true
    // }
    }


const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(30)

Npc.alerta=true //muda o alerta da classe NPC, não precisa mais alertar os npc um a um

//Npc.alertar() -->també cria um alerta em métodos estáticos

npc1.info()
npc2.info()
npc3.info()
