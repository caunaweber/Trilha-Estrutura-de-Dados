class HashTable {

    constructor(tamanho) {
        this.tabela = new Array(tamanho)

        for (let i = 0; i < tamanho; i++) {
            this.tabela[i] = []
        }
    }

    hash(chave) {
        return chave % this.tabela.length
    }

    inserir(chave, valor) {
        const indice = this.hash(chave)
        this.tabela[indice].push({ chave, valor })
    }

    buscar(chave) {

        const indice = this.hash(chave)

        for (let item of this.tabela[indice]) {
            if (item.chave === chave) return item.valor
        }

        return null
    }

    remover(chave) {

        const indice = this.hash(chave)
        const lista = this.tabela[indice]

        for (let i = 0; i < lista.length; i++) {

            if (lista[i].chave === chave) {
                lista.splice(i, 1)
                return true
            }

        }

        return false
    }
}

function testarTabela(tamanhoTabela) {

    const tabela = new HashTable(tamanhoTabela)
    const elementos = 500
    const chaves = []

    for (let i = 0; i < elementos; i++) {
        const chave = Math.floor(Math.random() * 10000)
        chaves.push(chave)
        tabela.inserir(chave, chave)
    }

    console.time("Busca")

    for (let chave of chaves) {
        tabela.buscar(chave)
    }

    console.timeEnd("Busca")


    console.time("Remocao")

    for (let chave of chaves) {
        tabela.remover(chave)
    }

    console.timeEnd("Remocao")

}

console.log("Tabela tamanho 50")
testarTabela(50)

console.log("Tabela tamanho 100")
testarTabela(100)

console.log("Tabela tamanho 250")
testarTabela(250)