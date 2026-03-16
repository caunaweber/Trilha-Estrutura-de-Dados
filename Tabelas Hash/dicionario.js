class DicionarioHash {

    constructor(tamanho = 50) {

        this.tabela = new Array(tamanho)

        for (let i = 0; i < tamanho; i++) {
            this.tabela[i] = []
        }
    }

    hash(palavra) {

        let soma = 0

        for (let letra of palavra) {
            soma += letra.charCodeAt(0)
        }

        return soma % this.tabela.length
    }

    inserir(palavra, significado) {

        const indice = this.hash(palavra)

        for (let item of this.tabela[indice]) {
            if (item.palavra === palavra) {
                item.significado = significado
                return
            }
        }

        this.tabela[indice].push({
            palavra,
            significado
        })
    }

    buscar(palavra) {

        const indice = this.hash(palavra)

        for (let item of this.tabela[indice]) {
            if (item.palavra === palavra) {
                return item.significado
            }
        }

        return "Palavra não encontrada no dicionário."
    }

    remover(palavra) {

        const indice = this.hash(palavra)

        const lista = this.tabela[indice]

        for (let i = 0; i < lista.length; i++) {

            if (lista[i].palavra === palavra) {
                lista.splice(i, 1)
                return "Palavra removida."
            }

        }

        return "Palavra não encontrada."
    }

}

const dicionario = new DicionarioHash()

dicionario.inserir("hash", "Estrutura de dados que usa função de dispersão")
dicionario.inserir("algoritmo", "Sequência de passos para resolver um problema")
dicionario.inserir("variavel", "Espaço de memória para armazenar valores")

console.log(dicionario.buscar("hash"))
console.log(dicionario.buscar("algoritmo"))
console.log(dicionario.buscar("variavel"));

console.log(dicionario.buscar("pilha"))

console.log(dicionario.remover("variavel"))

console.log(dicionario.buscar("variavel"))