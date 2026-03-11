class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function inOrder(no) {
    if (no === null) return;

    inOrder(no.esquerda);
    console.log(no.valor);
    inOrder(no.direita);
}

function postOrder(no) {
    if (no === null) return;

    postOrder(no.esquerda);
    postOrder(no.direita);
    console.log(no.valor);
}

function preOrder(no) {
    if (no === null) return;
    console.log(no.valor);
    preOrder(no.esquerda);
    preOrder(no.direita);
}

function buscar(no, valor) {

    if (no === null) return false

    if (valor === no.valor) return true

    if (valor < no.valor) {
        return buscar(no.esquerda, valor)
    }

    return buscar(no.direita, valor)
}

function inserir(no, valor) {

    if (no === null) {
        return new No(valor)
    }

    if (valor < no.valor) {
        no.esquerda = inserir(no.esquerda, valor)
    } else {
        no.direita = inserir(no.direita, valor)
    }

    return no
}

let raiz = null

let numeros = [8, 3, 10, 1, 6, 14, 4, 7]

for (let num of numeros) {
    raiz = inserir(raiz, num)
}

console.log("In Order:");
inOrder(raiz);

console.log("\nPost Order:");
postOrder(raiz);

console.log("\nPre Order:");
preOrder(raiz);

console.log(buscar(raiz, 5)) // false
console.log(buscar(raiz, 7)) 
raiz = inserir(raiz, 5)
console.log(buscar(raiz, 5)) // true