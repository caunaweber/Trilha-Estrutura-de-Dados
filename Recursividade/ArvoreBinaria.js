class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

let raiz = new No("A");
raiz.esquerda = new No("B");
raiz.direita = new No("C");
raiz.esquerda.esquerda = new No("D");
raiz.esquerda.direita = new No("E");
raiz.direita.direita = new No("F");

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

console.log("In Order:");
inOrder(raiz);

console.log("\nPost Order:");
postOrder(raiz);

console.log("\nPre Order:");
preOrder(raiz);