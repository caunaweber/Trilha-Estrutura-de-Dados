class UnionFind {
    constructor(n) {

        this.parent = new Array(n)
        this.rank = new Array(n)

        for (let i = 0; i < n; i++) {
            this.parent[i] = i
            this.rank[i] = 0
        }
    }

    find(x) {
        if (this.parent[x] !== x) {

            this.parent[x] = this.find(this.parent[x])

        }

        return this.parent[x]
    }

    union(x, y) {
        let raizX = this.find(x)
        let raizY = this.find(y)

        if (raizX === raizY) return

        if (this.rank[raizX] < this.rank[raizY]) {

            this.parent[raizX] = raizY

        } else if (this.rank[raizX] > this.rank[raizY]) {

            this.parent[raizY] = raizX

        } else {

            this.parent[raizY] = raizX
            this.rank[raizX]++

        }
    }

}

function encontrarComponentes(n, arestas) {

    const uf = new UnionFind(n)

    for (let [u, v] of arestas) {
        uf.union(u, v)
    }

    const componentes = {}

    for (let i = 0; i < n; i++) {

        const raiz = uf.find(i)

        if (!componentes[raiz]) {
            componentes[raiz] = []
        }

        componentes[raiz].push(i)

    }

    return Object.values(componentes)
}

const vertices = 5

const arestas = [
    [0,1],
    [1,2],
    [3,4]
]

const resultado = encontrarComponentes(vertices, arestas)

console.log("Componentes conectados:")
console.log(resultado)