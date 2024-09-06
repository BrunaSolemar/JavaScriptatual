//Arrays em JS -- array é uma colação de dados/variaveis, onde se pode ir add valores, pode ser armazenado qlqr coisa dentro de um array

const caixa=document.querySelector("#caixa")

let cores=["azul","verde","vermelho"]
let cursos=["HTML","CSS","JavaScript",cores] //o que indica que é array sao os [] -- "cursos" é o nome da coleção --- cores é um array dentro de outro array

cursos[0]="C++" // atrubui um novo valor a posição 0, ou seja, altera de "Html" para c++, tambem poderia alterar por numero, ex.: cursos[0]=2023


//para add elemtos no array (add no final)
cursos.push("C++")
cursos.push("Python")

//para add elemento no array (no inicio)
cursos.unshift("React")

//para retirar elementos no array (no inicio)
cursos.shift()


//para retirar elementos do array (retira o ultimo elemento do array)
cursos.pop()



cursos.map((el)=>{  //aqui imprime todos os elementos do array dentro da div caixa criada em html
    let p=document.createElement("P")
    p.innerHTML=el
    caixa.appendChild(p)
})

