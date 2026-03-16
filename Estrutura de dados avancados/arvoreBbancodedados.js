class BTreeIndex {

    constructor() {
        this.index = []
    }

    inserir(chave, registro) {

        this.index.push({ chave, registro })

    }

    buscar(chave) {

        let inicio = 0
        let fim = this.index.length - 1

        while (inicio <= fim) {

            let meio = Math.floor((inicio + fim) / 2)

            if (this.index[meio].chave === chave)
                return this.index[meio].registro

            if (this.index[meio].chave < chave)
                inicio = meio + 1
            else
                fim = meio - 1
        }

        return null
    }
}

const indice = new BTreeIndex()

const registros = 100000

console.time("Inserção índice")

for (let i = 0; i < registros; i++) {

    indice.inserir(i, {
        id: i,
        nome: "Usuario" + i
    })

}

console.timeEnd("Inserção índice")

console.time("Busca índice")

indice.buscar(54321)

console.timeEnd("Busca índice")