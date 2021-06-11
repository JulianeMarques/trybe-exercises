const arrayGlobal = ['HTML', 'CSS', 'JavaScript', 'React', 'Java'];

const retornaX = string => {
    const fun1 = retornaX => (
        `Tryber ${retornaX} aqui!


        Tudo bem?`
    )
    let result = `${fun1(string)}
    
    MInhas cinco habilidades sao:`
    
    arrayGlobal.forEach((skill, index) => 
    result = `${result}
    
    - ${skill}`)

    result = `
    ${result}
    
    #goTrybe`

    return result


}

console.log(retornaX('Juliane'));