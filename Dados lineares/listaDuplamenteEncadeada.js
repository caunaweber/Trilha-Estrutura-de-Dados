class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDuplamenteEncadeada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

        inserirInicio(valor) {
        let novoNo = new No(valor);

        if (this.head === null) {
            this.head = novoNo;
            this.tail = novoNo;
            return;
        }

        novoNo.proximo = this.head;
        this.head.anterior = novoNo;
        this.head = novoNo;
    }

        removerFinal() {
        if (this.tail === null) return;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.tail = this.tail.anterior;
        this.tail.proximo = null;
    }

        imprimirInicioParaFim() {
        let atual = this.head;
        let valores = [];

        while (atual !== null) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }

        console.log(valores.join(" -> "));
    }

        inserirInicio(valor) {
        let novoNo = new No(valor);

        if (this.head === null) {
            this.head = novoNo;
            this.tail = novoNo;
            return;
        }

        novoNo.proximo = this.head;
        this.head.anterior = novoNo;
        
        this.head = novoNo;
    }

        removerFinal() {
        if (this.tail === null) return;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.tail = this.tail.anterior;
        this.tail.proximo = null;
    }

        imprimirInicioParaFim() {
        let atual = this.head;
        let valores = [];

        while (atual !== null) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }

        console.log(valores.join(" -> "));
    }

        imprimirFimParaInicio() {
        let atual = this.tail;
        let valores = [];

        while (atual !== null) {
            valores.push(atual.valor);
            atual = atual.anterior;
        }

        console.log(valores.join(" <- "));
    }
}

let lista = new ListaDuplamenteEncadeada();

lista.inserirInicio(10);
lista.inserirInicio(5);
lista.inserirInicio(1);

lista.imprimirInicioParaFim(); // 1 -> 5 -> 10
lista.imprimirFimParaInicio(); // 10 <- 5 <- 1

lista.removerFinal();

lista.imprimirInicioParaFim(); // 1 -> 5
lista.imprimirFimParaInicio(); // 5 <- 1