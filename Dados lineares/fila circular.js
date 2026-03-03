class FilaCircular {
    constructor(tamanho) {
        this.itens = new Array(tamanho);
        this.tamanho = tamanho;
        this.inicio = 0;
        this.fim = 0;
        this.total = 0;
    }

    enqueue(valor) {
        if (this.estaCheia()) {
            console.log("Fila cheia!");
            return;
        }

        this.itens[this.fim] = valor;
        this.fim = (this.fim + 1) % this.tamanho;
        this.total++;
    }

    dequeue() {
        if (this.estaVazia()) {
            console.log("Fila vazia!");
            return null;
        }

        let valorRemovido = this.itens[this.inicio];
        this.inicio = (this.inicio + 1) % this.tamanho;
        this.total--;

        return valorRemovido;
    }

    estaVazia() {
        return this.total === 0;
    }

    estaCheia() {
        return this.total === this.tamanho;
    }

    printFila() {
        let resultado = [];
        for (let i = 0; i < this.total; i++) {
            resultado.push(this.itens[(this.inicio + i) % this.tamanho]);
        }
        return resultado.join(" <- ");
    }
}