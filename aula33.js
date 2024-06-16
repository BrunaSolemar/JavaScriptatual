const divTodas=[...document.getElementsByTagName("div")]

//const query_divTodas=[...document.querySelector("div")] //ele vai retornar apenas o primeiro elemento que ele achar como div e ignorar o restante, no caso, a div c1=html
// const query_divTodas=[...document.querySelectorAll("div,p")] retorna as divs e os paragrafos
// const query_divTodas=[...document.querySelectorAll("div[class]")]  retorna apenas as divs que tem class
// const query_divTodas=[...document.querySelectorAll("div > p")] retorna apenas as divs que tem tem elementos 'p'
const query_divTodas=[...document.querySelectorAll("div")] //-------> no querySelectorAll  ele retorna todas as divs
console.log(query_divTodas)

const cursoTodos=[...document.getElementsByClassName("curso")]
const query_cursoTodos=[...document.querySelectorAll(".curso")] //.curso=seleciona todos da class curso
console.log(query_cursoTodos)

const cursoEspecial=document.getElementById("c1")
const query_cursoEspecial=document.querySelectorAll("#c1")[0] //#=div especifica [0]=posição da div, transfoma nodelist em array
console.log(cursoEspecial)


