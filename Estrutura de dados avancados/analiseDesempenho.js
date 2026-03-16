class Node {
    constructor(valor) {
        this.valor = valor
        this.esq = null
        this.dir = null
        this.altura = 1
    }
}

class AVL {

    altura(no) {
        return no ? no.altura : 0
    }

    rotacaoDireita(y) {

        let x = y.esq
        let t2 = x.dir

        x.dir = y
        y.esq = t2

        y.altura = Math.max(this.altura(y.esq), this.altura(y.dir)) + 1
        x.altura = Math.max(this.altura(x.esq), this.altura(x.dir)) + 1

        return x
    }

    rotacaoEsquerda(x) {

        let y = x.dir
        let t2 = y.esq

        y.esq = x
        x.dir = t2

        x.altura = Math.max(this.altura(x.esq), this.altura(x.dir)) + 1
        y.altura = Math.max(this.altura(y.esq), this.altura(y.dir)) + 1

        return y
    }

    fator(no) {
        return no ? this.altura(no.esq) - this.altura(no.dir) : 0
    }

    inserir(no, valor) {

        if (!no) return new Node(valor)

        if (valor < no.valor)
            no.esq = this.inserir(no.esq, valor)
        else
            no.dir = this.inserir(no.dir, valor)

        no.altura = 1 + Math.max(this.altura(no.esq), this.altura(no.dir))

        let balance = this.fator(no)

        if (balance > 1 && valor < no.esq.valor)
            return this.rotacaoDireita(no)

        if (balance < -1 && valor > no.dir.valor)
            return this.rotacaoEsquerda(no)

        if (balance > 1 && valor > no.esq.valor) {
            no.esq = this.rotacaoEsquerda(no.esq)
            return this.rotacaoDireita(no)
        }

        if (balance < -1 && valor < no.dir.valor) {
            no.dir = this.rotacaoDireita(no.dir)
            return this.rotacaoEsquerda(no)
        }

        return no
    }

    buscar(no, valor) {

        if (!no) return false

        if (valor === no.valor) return true

        if (valor < no.valor)
            return this.buscar(no.esq, valor)

        return this.buscar(no.dir, valor)
    }

}

const quantidade = 10000

const dados = []

for (let i = 0; i < quantidade; i++) {
    dados.push(Math.floor(Math.random() * 100000))
}

const avl = new AVL()
let raiz = null

console.time("Inserção AVL")

for (let v of dados) {
    raiz = avl.inserir(raiz, v)
}

console.timeEnd("Inserção AVL")

console.time("Busca AVL")

for (let v of dados) {
    avl.buscar(raiz, v)
}

console.timeEnd("Busca AVL")

// Qual estrutura é melhor para grandes volumes?

// Árvore B.

// Motivos:

// 1 menor altura da árvore
// 2 menos acessos ao disco
// 3️ cada nó armazena muitos elementos
// 4️ melhor uso de blocos de memória
 
// Por que bancos usam B-tree?

// Porque:

// AVL → muitos níveis
// B-tree → poucos níveis

// Exemplo com 1 milhão de registros:

// AVL ≈ 20 níveis
// B-tree ≈ 3 níveis

// Menos acessos → mais rápido em disco.