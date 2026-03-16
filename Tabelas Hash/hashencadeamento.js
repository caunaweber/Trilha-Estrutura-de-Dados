class TabelaHash {
    
    constructor(tamanho = 10) {
        this.tabela = new Array(tamanho)

        for (let i = 0; i < tamanho; i++) {
            this.tabela[i] = []
        }
    }

    hash(chave) {
        let soma = 0

        for (let letra of chave) {
            soma += letra.charCodeAt(0)
        }

        return soma % this.tabela.length
    }

    inserir(chave, valor) {
        const indice = this.hash(chave)

        this.tabela[indice].push({
            chave: chave,
            valor: valor
        })
    }

    buscar(chave) {
        const indice = this.hash(chave)

        for (let elemento of this.tabela[indice]) {
            if (elemento.chave === chave) {
                return elemento.valor
            }
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

const tabela = new TabelaHash()

tabela.inserir("gato", 10)
tabela.inserir("casa", 20)
tabela.inserir("carro", 30)

console.log(tabela.buscar("gato"))
console.log(tabela.buscar("casa"))

tabela.remover("casa")

console.log(tabela.buscar("casa"))