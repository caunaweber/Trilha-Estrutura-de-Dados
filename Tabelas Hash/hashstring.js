function hashString(str, tamanhoTabela = 100) {

    let hash = 0

    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) % tamanhoTabela
    }

    return hash
}

function testarDistribuicao() {

    const tamanhoTabela = 100
    const distribuicao = new Array(tamanhoTabela).fill(0)

    for (let i = 0; i < 1000; i++) {

        const palavra = "palavra" + i
        const indice = hashString(palavra, tamanhoTabela)

        distribuicao[indice]++
    }

    let colisoes = 0

    for (let valor of distribuicao) {
        if (valor > 1) colisoes += valor - 1
    }

    console.log("Distribuição:")
    console.log(distribuicao)

    console.log("Total de colisões:", colisoes)
}

testarDistribuicao()