const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
cursos.map((el,i)=>{ //el=primeiro parametro, ELEMENTO da coleção -1 elemento a cara iteração -- i= segundo parametro - INDICE-posição do elemento dentro da coleção
    console.log("Curos:" + el + " - Posição do curso:" + i)
})



let el=document.getElementsByTagName("div")
el=[...el] //elementos recebe o espalhador (spread) do proprio elemento
el.map((e,i)=>{ //e=elemento, i=indice
    console.log(e) 
    })
    console.log(el)


        
const ele=document.getElementsByTagName("div") //ele=elementos
    const val=Array.prototype.map.call(ele,({innerHTML})=>innerHTML) //map.caal chama diretos os valores que se quer alterar
    console.log(val)

const converterInt=(e)=>parseInt(e)
let num=['1','2','3','4','5' ].map(converterInt)
console.log(num)

const converterInte=(ee)=>parseInt(ee)
const dobrar=(ee)=>ee*2
let num1=['1','2','3','4','5'].map(dobrar) //dobra os valores de let num
console.log(num1)







