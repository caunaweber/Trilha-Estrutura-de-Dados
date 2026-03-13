class Grafo {

    constructor() {
        this.lista = {}
    }

    adicionarVertice(v) {
        if (!this.lista[v])
            this.lista[v] = []
    }

    adicionarAresta(origem, destino, peso = 1) {

        this.lista[origem].push({
            no: destino,
            peso: peso
        })

    }

    dfs(inicio, visitado = new Set()) {

        console.log(inicio)

        visitado.add(inicio)

        for (let vizinho of this.lista[inicio]) {

            if (!visitado.has(vizinho.no)) {
                this.dfs(vizinho.no, visitado)
            }

        }

    }

    bfs(inicio) {

        let fila = [inicio]
        let visitado = new Set()

        visitado.add(inicio)

        while (fila.length > 0) {

            let atual = fila.shift()

            console.log(atual)

            for (let vizinho of this.lista[atual]) {

                if (!visitado.has(vizinho.no)) {

                    visitado.add(vizinho.no)

                    fila.push(vizinho.no)

                }

            }

        }

    }

    dijkstra(inicio) {

        let dist = {}
        let visitado = new Set()

        for (let v in this.lista) {
            dist[v] = Infinity
        }

        dist[inicio] = 0

        while (true) {

            let menor = null

            for (let v in dist) {

                if (!visitado.has(v) && (menor === null || dist[v] < dist[menor])) {
                    menor = v
                }

            }

            if (menor === null) break

            visitado.add(menor)

            for (let vizinho of this.lista[menor]) {

                let novaDist = dist[menor] + vizinho.peso

                if (novaDist < dist[vizinho.no]) {
                    dist[vizinho.no] = novaDist
                }

            }

        }

        return dist
    }

    floydWarshall() {

        let vertices = Object.keys(this.lista)

        let dist = {}

        for (let v of vertices) {
            dist[v] = {}
            for (let u of vertices) {
                dist[v][u] = Infinity
            }
            dist[v][v] = 0
        }

        for (let v of vertices) {
            for (let aresta of this.lista[v]) {
                dist[v][aresta.no] = aresta.peso
            }
        }

        for (let k of vertices) {
            for (let i of vertices) {
                for (let j of vertices) {

                    if (dist[i][k] + dist[k][j] < dist[i][j]) {

                        dist[i][j] = dist[i][k] + dist[k][j]

                    }

                }
            }
        }

        return dist
    }

}

let g = new Grafo()

g.adicionarVertice("A")
g.adicionarVertice("B")
g.adicionarVertice("C")
g.adicionarVertice("D")

g.adicionarAresta("A","B",4)
g.adicionarAresta("A","C",2)
g.adicionarAresta("C","B",1)
g.adicionarAresta("B","D",5)
g.adicionarAresta("C","D",8)

console.log("DFS")
g.dfs("A")

console.log("\nBFS")
g.bfs("A")

console.log("\nDijkstra")
console.log(g.dijkstra("A"))

console.log("\nFloyd-Warshall")
console.log(g.floydWarshall())