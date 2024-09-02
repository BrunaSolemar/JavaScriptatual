const idades=[15,21,30,17,18,44,12,50]

const maior=idades.filter((val,ind,arr)=>{
    if(val >= 18)
        return val
})

const menor=idades.filter((val,ind,arr)=>{
    if(val < 18)
        return val
})

console.log(idades)
console.log(maior)
console.log(menor)