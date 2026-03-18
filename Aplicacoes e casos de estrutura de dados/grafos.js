class Grafo {
    constructor() {
        this.lista = {};
    }

    adicionarUsuario(usuario) {
        if (!this.lista[usuario]) {
            this.lista[usuario] = [];
        }
    }

    adicionarAmizade(u1, u2) {
        this.adicionarUsuario(u1);
        this.adicionarUsuario(u2);

        this.lista[u1].push(u2);
        this.lista[u2].push(u1);
    }

    bfs(inicio, destino) {
        let fila = [[inicio, 0]];
        let visitados = new Set();

        visitados.add(inicio);

        while (fila.length > 0) {
            let [atual, distancia] = fila.shift();

            if (atual === destino) {
                return distancia;
            }

            for (let vizinho of this.lista[atual]) {
                if (!visitados.has(vizinho)) {
                    visitados.add(vizinho);
                    fila.push([vizinho, distancia + 1]);
                }
            }
        }

        return -1
    }

    bfsCaminho(inicio, destino) {
        let fila = [[inicio]];
        let visitados = new Set();

        visitados.add(inicio);

        while (fila.length > 0) {
            let caminho = fila.shift();
            let atual = caminho[caminho.length - 1];

            if (atual === destino) {
                return caminho;
            }

            for (let vizinho of this.lista[atual]) {
                if (!visitados.has(vizinho)) {
                    visitados.add(vizinho);
                    fila.push([...caminho, vizinho]);
                }
            }
        }

        return null;
    }
}

const rede = new Grafo();

rede.adicionarAmizade("Ana", "João");
rede.adicionarAmizade("João", "Pedro");
rede.adicionarAmizade("Pedro", "Lucas");
rede.adicionarAmizade("Ana", "Maria");
rede.adicionarAmizade("Maria", "Lucas");

console.log("Distância Ana → Lucas:", rede.bfs("Ana", "Lucas"));
console.log(rede.bfsCaminho("Ana", "Lucas"));