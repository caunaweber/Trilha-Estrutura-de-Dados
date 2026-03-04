class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(valor) {
        this.itens.push(valor);
    }

    dequeue() {
        if (this.estaVazia()) {
            console.log("Fila vazia!");
            return null;
        }
        return this.itens.shift();
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    printFila() {
        return this.itens.join(" <- ");
    }
}

let fila = new Fila();

fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);

console.log(fila.printFila());

fila.dequeue();

console.log(fila.printFila());

class Banco {
    constructor() {
        this.fila = new Fila();
    }

    chegarCliente(nome) {
        console.log(`${nome} entrou na fila.`);
        this.fila.enqueue(nome);
    }

    atenderCliente() {
        if (this.fila.estaVazia()) {
            console.log("Nenhum cliente para atender.");
            return;
        }

        let cliente = this.fila.dequeue();
        console.log(`${cliente} foi atendido(a).`);
    }

    mostrarFila() {
        console.log("Fila atual:", this.fila.printFila());
    }
}

let banco = new Banco();

console.log("------------------------------------\nTestendo fila do banco");

banco.chegarCliente("Ana");
banco.chegarCliente("Carlos");
banco.chegarCliente("Marina");

banco.mostrarFila();

banco.atenderCliente();
banco.atenderCliente();

banco.mostrarFila();