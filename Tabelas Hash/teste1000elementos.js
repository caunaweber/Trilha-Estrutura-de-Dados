class HashEncadeamento {

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
}

class HashLinear {

    constructor(tamanho) {
        this.tabela = new Array(tamanho).fill(null)
        this.tamanho = tamanho
    }

    hash(chave) {
        return chave % this.tamanho
    }

    inserir(chave, valor) {

        let indice = this.hash(chave)

        while (this.tabela[indice] !== null) {
            indice = (indice + 1) % this.tamanho
        }

        this.tabela[indice] = { chave, valor }
    }

    buscar(chave) {

        let indice = this.hash(chave)

        while (this.tabela[indice] !== null) {

            if (this.tabela[indice].chave === chave) {
                return this.tabela[indice].valor
            }

            indice = (indice + 1) % this.tamanho
        }

        return null
    }
}

const tamanho = 1333
const elementos = 1000

const hashEnc = new HashEncadeamento(tamanho)
const hashLin = new HashLinear(tamanho)

const chaves = []

for (let i = 0; i < elementos; i++) {
    const chave = Math.floor(Math.random() * 10000)
    chaves.push(chave)
}

console.time("Encadeamento Inserir")

for (let chave of chaves) {
    hashEnc.inserir(chave, chave)
}

console.timeEnd("Encadeamento Inserir")


console.time("Linear Inserir")

for (let chave of chaves) {
    hashLin.inserir(chave, chave)
}

console.timeEnd("Linear Inserir")


console.time("Encadeamento Buscar")

for (let chave of chaves) {
    hashEnc.buscar(chave)
}

console.timeEnd("Encadeamento Buscar")


console.time("Linear Buscar")

for (let chave of chaves) {
    hashLin.buscar(chave)
}

console.timeEnd("Linear Buscar")