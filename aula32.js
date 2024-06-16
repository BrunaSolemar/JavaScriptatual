const cursosTodos=[...document.getElementsByClassName("curso")] //imprime todos os cursos de todas as divs
const cursosC1=[...document.getElementsByClassName("c1")] //imprime os cursos só do class c1
const cursosC2=[...document.getElementsByClassName("c2")] // imprime os cursos so do clss c2
const cursoEspecial=document.getElementsByClassName('curso')[0] //imprime um elemento em especifico [0]=posição zero, ou seja, o curso HTML

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)