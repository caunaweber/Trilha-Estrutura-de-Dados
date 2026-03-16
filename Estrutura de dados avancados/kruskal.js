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

function kruskal(vertices, arestas) {
    const uf = new UnionFind(vertices)

    arestas.sort((a, b) => a.peso - b.peso)

    const mst = []
    let custoTotal = 0

    for (let aresta of arestas) {

        const {u, v, peso} = aresta

        if (uf.find(u) !== uf.find(v)) {

            uf.union(u, v)

            mst.push(aresta)
            custoTotal += peso
        }

    }

    return { mst, custoTotal }
}

const vertices = 4

const arestas = [
    {u:0, v:1, peso:1},
    {u:1, v:3, peso:2},
    {u:0, v:3, peso:3},
    {u:0, v:2, peso:4},
    {u:2, v:3, peso:5}
]

const resultado = kruskal(vertices, arestas)

console.log("Árvore Geradora Mínima:")
console.log(resultado.mst)

console.log("Custo total:", resultado.custoTotal)