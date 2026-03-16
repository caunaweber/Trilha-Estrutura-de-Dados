function hashInteiro(chave) {
    const tamanhoTabela = 10
    return chave % tamanhoTabela
}

function hashString(chave) {
    const tamanhoTabela = 10
    let soma = 0

    for (let letra of chave) {
        soma += letra.charCodeAt(0)
    }

    return soma % tamanhoTabela
}

console.log(hashInteiro(23))
console.log(hashInteiro(15))
console.log(hashInteiro(102))

console.log(hashString("abc"))
console.log(hashString("casa"))
console.log(hashString("gato"))