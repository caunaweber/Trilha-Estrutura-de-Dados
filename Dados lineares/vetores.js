let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removerValor(valor) {
    let index = vetor.indexOf(valor);
    if (index !== -1) {
        vetor.splice(index, 1);
    }
}

function imprimirVetor() {
    console.log(vetor);
}

imprimirVetor();
removerValor(5);
console.log("Valor removido");
imprimirVetor();
