const jogador1={nome:"Bruno",energia:100,vidas:3,magia:150}

const jogador2={nome:"Bruce",energia:100,vidas:5,velocidade:80}

const jogador3={...jogador1,...jogador2}//ele vai pegar os dados em comum das duas const, que sao nome, energia e vidas, e vai lanças os valores da ultima const, e vai acrescentar o que tem de diferente nas duas. Entao a resposta a jogador3 é: nome:Bruce, energia 100, vidas 5, magia:150, velocidade: 80. Ou seja, ele concatena os dois, e lança a mais só os dados diferentes

console.log(jogador3) 

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4,10,20]
console.log(soma(...valores))  //Resposta:10, pq mesmo tendo outros numeros dentro de let valores, o sprand vai pegar os trez primeiros, pq é o que foi determinado em v1,v2,v3

const objs1=document.getElementsByTagName("div") //coleção de elementos html, que é diferente de arrays
const objs2=[...document.getElementsByTagName("div")] //trasforma o html collections em arryas

console.log(objs1) //html collection so recebe elementos html
console.log(objs2) //array de elementos html, recebe qualquer elemento dentro do array, sendo possivel trabalhar de outras formas com esse html