class MaxHeap {

    constructor() {
        this.heap = []
    }

    inserir(valor) {

        this.heap.push(valor)

        let i = this.heap.length - 1

        while (i > 0) {

            let pai = Math.floor((i - 1) / 2)

            if (this.heap[pai] >= this.heap[i])
                break

            [this.heap[pai], this.heap[i]] = [this.heap[i], this.heap[pai]]

            i = pai
        }
    }

    removerMax() {

        if (this.heap.length === 0)
            return null

        let max = this.heap[0]

        this.heap[0] = this.heap.pop()

        let i = 0

        while (true) {

            let esq = 2 * i + 1
            let dir = 2 * i + 2
            let maior = i

            if (esq < this.heap.length && this.heap[esq] > this.heap[maior])
                maior = esq

            if (dir < this.heap.length && this.heap[dir] > this.heap[maior])
                maior = dir

            if (maior === i)
                break

            [this.heap[i], this.heap[maior]] = [this.heap[maior], this.heap[i]]

            i = maior
        }

        return max
    }

    imprimir() {
        console.log(this.heap)
    }
}

let fila = new MaxHeap()

fila.inserir(10)
fila.inserir(40)
fila.inserir(30)
fila.inserir(50)
fila.inserir(20)

fila.imprimir()

console.log("Maior:", fila.removerMax())

fila.imprimir()