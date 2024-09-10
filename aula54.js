//Coleção MAP (diferente de elemento Map, que é usado pra percorrer coleção) - É uma coleção onde posso armazenar pares de chaves e valor, e tanto a chave quanto o valor podem ser de qualquer tipo de dado (numeros, strings, objetos, etc), a ordem da inserção é mantida e é facil de verificar se uma chave existe e o numero total de pares

const caixa=document.querySelector("#caixa")

let mapa=new Map() 

mapa.set("curso","JavaScript") //valores sao referenciados pelas chaves (nesse caso é"curso") e retorna valores(nesse caso é "JavaScript"), podem haver valores iguais, mas não chaves iguais
mapa.set(10,"CFB Cursos")
mapa.set(1,100)
mapa.set("canal",100)

mapa.delete(1) //deleta o elemento da chave "1" --- diminui o tamanho da coleção que era 4 (pq tinha 4 mapa.set), para 3


//para saber se uma chave esxiste na coleção:
if(mapa.has("canal")){
    caixa.innerHTML="A chave existe na coleção "
}else{
    caixa.innerHTML="A chave NÃO está na coleção"
}


//caixa.innerHTML=mapa.get("curso") //a caixa vai obter o valor da chave "curso"

//para percorrer toda a coleção:
mapa.forEach((el)=>{
    console.log(el)
})