class TabelaHashLinear {

    constructor(tamanho = 10) {
        this.tabela = new Array(tamanho).fill(null)
        this.tamanho = tamanho
    }

    hash(chave) {
        let soma = 0

        for (let letra of chave) {
            soma += letra.charCodeAt(0)
        }

        return soma % this.tamanho
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

    remover(chave) {

        let indice = this.hash(chave)

        while (this.tabela[indice] !== null) {

            if (this.tabela[indice].chave === chave) {
                this.tabela[indice] = null
                return true
            }

            indice = (indice + 1) % this.tamanho
        }

        return false
    }

}

const tabela = new TabelaHashLinear(10)

tabela.inserir("ana", 10)
tabela.inserir("bia", 20)
tabela.inserir("leo", 30)

console.log(tabela.buscar("ana"))
console.log(tabela.buscar("bia"))

tabela.remover("bia")

console.log(tabela.buscar("bia"))