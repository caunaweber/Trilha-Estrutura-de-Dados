class No {
    constructor(valor){
        this.valor = valor
        this.esquerda = null
        this.direita = null
    }
}

function buscar(no, valor) {

    if (no === null) return false

    if (valor === no.valor) return true

    if (valor < no.valor) {
        return buscar(no.esquerda, valor)
    }

    return buscar(no.direita, valor)
}

let arvore = new No(50)

arvore.esquerda = new No(30)
arvore.direita = new No(70)

arvore.esquerda.esquerda = new No(20)
arvore.esquerda.direita = new No(40)

arvore.direita.esquerda = new No(60)
arvore.direita.direita = new No(80)

console.log(buscar(arvore, 40)) 
console.log(buscar(arvore, 25))