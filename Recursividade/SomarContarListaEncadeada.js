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

    somaRecursiva(no = this.head) {
        if (no === null) return 0;
        return no.valor + this.somaRecursiva(no.proximo);
    }

    contarNos(no = this.head) {
    if (no === null) return 0;
    return 1 + this.contarNos(no.proximo)
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
lista.inserirInicio(5);
lista.inserirInicio(10);
lista.inserirInicio(15);
lista.inserirInicio(100);

console.log("Lista Encadeada:");
lista.imprimir();
console.log("Soma dos elementos da lista:", lista.somaRecursiva());

console.log("Quantidade de nós:", lista.contarNos());
