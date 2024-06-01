function canal(){
    let n1=10
    let n2=2
    let res=n1*n2
    if(res%2 == 0)
        return "Par"  //deve-se garantir que apenas 1 return seja excultado, qnd o programa se depara com o primeiro return ele deixa de execultar os demais 
    else
        return "Impar"
}

let res=canal()
console.log(res)