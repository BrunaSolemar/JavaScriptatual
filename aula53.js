//Populando arrays com FUNÇÔES

let valores=[1,2,3,4,5]
const ope=[   //ope=opreaç~eos
    (val)=>{
        let resp=0
        for(v of val){
            resp+=v
        }
        return resp
    },
    (val)=>{
        let resp=1
        for(v of val){
            resp*=v  //função de multiplicação
        } 
        return resp
    },
    (val)=>{ //funçãopara imprimir valores da coleção
        for(v of val){
            console.log(v)
        }
    }
] 

console.log(ope[0](valores)) //op 0 pega a primeira função que é soma
console.log(ope[1](valores)) //op 1 pega a segunda função, multiplicação
ope[2](valores) //não preciso mais usar console.log pq ja está na terceira função


//para fazer a calculadora funcionar:

const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_multiplicacao=document.querySelector("#btn_multiplicacao")
const btn_divisao=document.querySelector("#btn_divisao")
const res=document.querySelector("#res")

const op=[
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
            res.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
            res.value=Number(val[0]-Number(val[1]))
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
            res.value=Number(val[0]*Number(val[1]))
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
            res.value=Number(val[0]/Number(val[1]))
    }
]
btn_soma.addEventListener("click",op[0])
btn_subtracao.addEventListener("click",op[1])
btn_multiplicacao.addEventListener("click",op[2])
btn_divisao.addEventListener("click",op[3])