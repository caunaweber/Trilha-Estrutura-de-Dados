class Pilha {
    constructor(tamanhoMaximo) {
        this.itens = [];
        this.tamanhoMaximo = tamanhoMaximo;
    }

    push(valor) {
        if (this.estaCheia()) {
            console.log("Pilha está cheia!");
            return;
        }
        this.itens.push(valor);
    }

    pop() {
        if (this.estaVazia()) {
            console.log("Pilha está vazia!");
            return null;
        }
        return this.itens.pop();
    }

    peek() {
        if (this.estaVazia()) return null;
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    estaCheia() {
        return this.itens.length === this.tamanhoMaximo;
    }

    printPilha(){
        return this.itens.join(" -> ");
    }
}

let pilha = new Pilha(3);

pilha.push(10);
pilha.push(20);
pilha.push(30);

console.log(pilha.peek());

console.log(pilha.estaCheia());
console.log(pilha.printPilha());

pilha.pop();

console.log(pilha.printPilha());
console.log(pilha.estaVazia());

function verificarParenteses(expressao) {
    let pilha = new Pilha(expressao.length);

    for (let i = 0; i < expressao.length; i++) {
        let caractere = expressao[i];

        if (caractere === "(") {
            pilha.push(caractere);
        } 
        else if (caractere === ")") {
            if (pilha.estaVazia()) {
                return false;
            }
            pilha.pop();
        }
    }

    return pilha.estaVazia();
}
console.log("----------------------------------------------------\nTeste de verificação de parênteses:");
console.log(verificarParenteses("((1+2) * (3/4))"));
console.log(verificarParenteses("((1+2) * (3/4)"));
console.log(verificarParenteses("(1+2))"));