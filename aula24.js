const f=function(v1,v2){
    return v1+v2
}

console.log(f(10,5)) 

const f1=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f1(10,5))

const f2=new Function("v1","v2","return v1+v2") //função construtor anonima 

console.log(f2(10,5))

