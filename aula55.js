//Coleção SET -- Não permite entradas duplicadas de elementos,ou seja, é uma coleção de valores unicos, não tem chaves


const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica1","musica boa","musica10"]) //pode se add elementos no proprio contrutor (set)

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica10") //musica1 e musica10 não serão add pq elas já entao no construtor, não permitindo repetição

musicas.delete("musica1")

// musicas.clear()   --- limpa toda a coleção


console.log(musicas)

//musicas.forEach((el)=>{ //colocas as musicas do set dentro da caixa do html
   // caixa.innerHTML+=el + "<br/>"
//})

for(let m of musicas){
    caixa.innerHTML+=m + "<br/>"
}