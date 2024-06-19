const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(btn_c)
console.log(caixa1.children)//mostra os filhos dentro do parent (caixa) - devtool elements
console.log(caixa1.children[caixa1.children.length-1]) //mostra a posição do ultimo elemento, o -1 é pq a contagem começa de 0, então se tiver 6 elementos, o ultimo vai ser o numero 5
console.log(caixa1.firstElementChild) //motra o primeiro elemento
console.log(caixa1.lastElementChild) //mostra o ultimo elemento

console.log(document.getRootNode()) //mostra o documento inteiro, todas as raízes começando pelo nó raiz- getRoorNode entre () pq ele é um método

console.log(btn_c[0].ownerDocument) //é uma propriedade, mostra o "proprietário" do documento