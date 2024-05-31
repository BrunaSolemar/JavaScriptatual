let num=[10,20,30,40,50]

//for in - se quiser pegar as posições
for(n in num){   //variavel que vai receber os elementos retornados da coleção(no caso: num)
    console.log(n) //retorna a posição de cada elemento do num
    console.log(num[n]) //da posição num vai imprimir os valores de n
}   


//for of - se quiser pegar os elementos. Intera diretamente os elementos dentro da coleção, ele vai dentro do elemento da coleção, sem dar promeiro posição de elementos, como é o caso do for in
for(n of num){
    console.log(n)
}

//coleção de elementos

const objs=document.getElementsByTagName("div")
let num2=[10,20,30,40,50]

for(o of objs){
    console.log(o)
}

for(o in objs){
    console.log(o)
}