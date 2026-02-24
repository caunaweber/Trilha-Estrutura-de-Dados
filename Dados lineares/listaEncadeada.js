class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada{
    constructor() {
        this.head = null;
    }

    inserirInicio(valor){
        let novoNo = new No(valor);
        novoNo.proximo = this.head;
        this.head = novoNo;
    }

    inserirFinal(valor) {
        let novoNo = new No(valor);

        if (this.head === null) {
            this.head = novoNo;
            return;
        }

        let atual = this.head;
        while (atual.proximo !== null) {
            atual = atual.proximo;
        }

        atual.proximo = novoNo;
    }

        removerPosicao(posicao) {
        if (this.head === null) return;

        if (posicao === 0) {
            this.head = this.head.proximo;
            return;
        }

        let atual = this.head;
        let anterior = null;
        let contador = 0;

        while (atual !== null && contador < posicao) {
            anterior = atual;
            atual = atual.proximo;
            contador++;
        }

        if (atual !== null) {
            anterior.proximo = atual.proximo;
        }
    }

        buscar(valor) {
        let atual = this.head;
        let posicao = 0;

        while (atual !== null) {
            if (atual.valor === valor) {
                return posicao;
            }
            atual = atual.proximo;
            posicao++;
        }

        return null;
    }

        imprimir() {
        let atual = this.head;
        let valores = [];

        while (atual !== null) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }

        console.log(valores.join(" -> "));
    }
}

let lista = new ListaEncadeada();

lista.inserirInicio(10);
lista.inserirInicio(5);
lista.inserirFinal(1);
lista.inserirFinal(30);

lista.imprimir(); // 5 -> 10 -> 1 -> 30

lista.removerPosicao(2);
lista.imprimir(); // 5 -> 10 -> 30

console.log(lista.buscar(5)); // 0
console.log(lista.buscar(99)); // null