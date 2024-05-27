let n1=10
let n2=5
let n3=15
let n4=2

console.log((n1>n2)&&(n1>n3)) //verdadeiro e falso = falso

console.log((n1>n4)&&(n2>n4)) //verdadeiro e verdadeiro = verdadeiro

console.log((n1>n2)||(n1>n3)) //verdadeiro ou falso = verdadeiro

console.log((n1>n3)||(n3<n4)) //falso ou falso = falso

console.log(!((n1>n3)||(n3<n4))) //falso ou falso = verdadeiro pq a ! inverteu o valor do resultado

if(n1>n2){
    console.log(n1 + " maior que " + n2)
}else{
    console.log(n1 + " menor que " + n2)
} //resposta = 10 maior que 5

if((n1>n2)&&(n3>n4)){ //true && true
    console.log("Verdadeiro")
}else{
    console.log("Falso")
} //resposta = verdadeiro

if((n1>n2)||(n3>n4)){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
} //resposta verdadeiro