/* let num=10

 let res=num%2  //se o resto (%) do numero dividido por 2 for:

 if(res==0){ //igual a 0
    console.log("Par")
 }else{ //se o numero dividido por 2 sobrar resto (%)
    console.log("Impar")
 } */

 //transformando em operador ternario

 let num=10
 res=(!(num%2) ? "Par" : "Impar") //o resto da divisão 10/2 é igual a 0, em operações o resultado 0 corresponde a false o resultado 1 conrresponde a true, então no caso o resultado seria impar, pq o primeiro valor entre "" corresponde a true, enquanto o segundo valor corresponde a false. Por isso é necessario negar a primeira operação com !, pq assim ele transformara o resultado 0 em true, ou seja, Par.
 console.log(res)

 //sintaxe do operador ternario: 
 // (teste logico) ? se verdadeiro : se falso

  let num2=10
  let num3=5

  res=(num2 > num3 ? "Verdadeiro" : "Falso")
  console.log(res)