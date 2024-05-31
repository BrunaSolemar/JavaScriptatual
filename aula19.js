let n=0
let max=1000
let pares=0

/*while(n<max){
    console.log("CFB cursos - " + n)
    n++
}
console.log("fim do programa")     aqui executaria os números de 0 a 999*/  

/*while(n<max){
    console.log("CFB Cursos - " + n)
    if(n>10){           //a execução para quando chegar no número 11, pq quando n for maior que 10 tem um break
        break
    }
    n++
}
console.log("fim do programa")   */

for(let i=n;i<max;i++){
    if(i%2!=0){  //i%2 diferente de 0 - entrega os numeros impares
        continue //não vai computar os numeros impares e vai pular ou continuar pros pares
    }
    pares++
}
 console.log("Quantidade de pares: " + pares)
 console.log("Fim do programa")