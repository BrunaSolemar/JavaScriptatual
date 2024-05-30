const jogador1={nome:"Bruno",energia:100,vidas:3,magia:150}

const jogador2={nome:"Bruce",energia:100,vidas:5,velocidade:80}

const jogador3={...jogador1,...jogador2}//ele vai pegar os dados em comum das duas const, que sao nome, energia e vidas, e vai lanças os valores da ultima const, e vai acrescentar o que tem de diferente nas duas. Entao a resposta a jogador3 é: nome:Bruce, energia 100, vidas 5, magia:150, velocidade: 80. Ou seja, ele concatena os dois, e lança a mais só os dados diferentes

console.log(jogador3) 