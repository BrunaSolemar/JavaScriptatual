//convertendo objetos literais me JSON e JSON em objetos literais -- JSON = é uma maneira simples de organizar e trocar dados em texto. É usado para enviar informações entre programas ou entre site e servidor, usa pares de "chave-valor"

const pessoa={
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas)
// console.log(pessoa.aulas.aula01)

const string_pessoa='{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa=JSON.stringify(pessoa) //s=string, stringify converte o objeto literal em uma string JSON
const o_json_pessoa=JSON.parse(string_pessoa) //transformando string JSON em objeto

console.log(pessoa)  //=>obejto
console.log(s_json_pessoa) //=>string no formato json
console.log(o_json_pessoa)