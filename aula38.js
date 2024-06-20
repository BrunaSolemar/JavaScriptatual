const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(btn_c)
console.log(caixa1.children)//mostra os filhos (elementos) dentro do parent (caixa) - devtool elements
console.log(caixa1.children[caixa1.children.length-1]) //mostra a posição do ultimo elemento, o -1 é pq a contagem começa de 0, então se tiver 6 elementos, o ultimo vai ser o numero 5
console.log(caixa1.firstElementChild) //motra o primeiro elemento num todo, ou seja, mostra a div

console.log(caixa1.firstChild) //mostra o conteúdo do primeiro elemento, ou seja, é um text (html)

console.log(caixa1.lastElementChild) //mostra o ultimo elemento

console.log(document.getRootNode()) //mostra o documento inteiro, todas as raízes começando pelo nó raiz- getRoorNode entre () pq ele é um método

console.log(btn_c[0].ownerDocument) //é uma propriedade, mostra o "proprietário" do documento

console.log(caixa1.hasChildNodes()) //retorna true se o elemento tiver filhos, inclusive se tiver apenas texto, ele reconhece como filho

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos") //se o tamanho da caixa1 for maior que 0 ele retorna "possui filhos", senao (:), retorna "não possui filhos" -- aqui, como dentro da caixa1 estão os botões ele retorna que possui filho

console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos") //se o tamanho da btn_c posição 0, que é o primeiro botão, for maior que 0 ele retorna "possui filhos", senao (:), retorna "não possui filhos" -- aqui, como ele não tem outras divs dentro, ele retorna que nao possui filho

console.log(caixa1.firstElementChild.innerHTML="Teste") //mudo o conteudo do primeiro elemento, que antes era HTML

console.log(caixa1.children[3].innerHTML="Teste") //mudo o conteudo do filho de posição 3 de PHP para Teste

console.log(btn_c[2].parentElement) //mostra o pai do botão de posição 2 (JavaScript), o pai é a div caixa1

console.log(btn_c[2].parentNode.parentNode) //mostra o avô do botão de posição 2, nesse caso o avô é o main

console.log(btn_c[0].parentNode.children[4]) //acha o pai e o filho especifico (da posição 4)





