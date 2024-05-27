let n1=10
let n2=11

let res = n1 & n2
console.log(res)

/* 10 decimal corresponde a 1010 binario
   11 decimal corresponde a 1011 binario
           logo 1010
                1011operaçao and número 1 com 0 retorna 0
resultado       1010 -> que corresponde a 10 decimal, por isso a resposta é 10 */   

let res1 = n1 | n2
console.log(res1)
                /*1010
                  1011
 resultado        1011 -> pq na operação or, o numero 1 com 0 nao retorna 0, mas retorna sempre 1, por isso a repsosta é 11 */

 let res2 = n1 ^ n2
 console.log(res2)
                /*1010
                  1011
 resultado        0001 -> pq na operação xor, só retorna valor se forem dois numeros diferentes e o resultado de 0 com 1 é sempre 1 */

 let res3 = n1 << 1
 console.log(res3) /*   resposta = 20
                        n1=10 -> 00001010 deslocou 1 casa a esquerda
                                 00010100 ->equivalente a 20 */

let n4=25
let res4 = n4 << 1
console.log(res4) /*  reposta = 50
                 n4=25->00011001 desloca 1 casa a esquerda 
                        00110010 -> equivalente a 50 */           
                        
//OBSERVAÇÃO: Sempre que for descolada apenas 1 casa a esquerda o valor será dobrado. E sempre que desloca para direita o valor será reduzido pela metade


let res5 = n4 >> 1
console.log(res5) /*resposta 12 pq diminuiu metade do valor*/


