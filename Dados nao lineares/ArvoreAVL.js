class No {
    constructor(valor) {
        this.valor = valor
        this.esquerda = null
        this.direita = null
        this.altura = 1
    }
}


function altura(no) {
    if (no === null) return 0
    return no.altura
}

function fatorBalanceamento(no) {
    return altura(no.esquerda) - altura(no.direita)
}

function rotacaoDireita(y) {

    let x = y.esquerda
    let T2 = x.direita

    x.direita = y
    y.esquerda = T2

    y.altura = Math.max(altura(y.esquerda), altura(y.direita)) + 1
    x.altura = Math.max(altura(x.esquerda), altura(x.direita)) + 1

    return x
}

function rotacaoEsquerda(x) {

    let y = x.direita
    let T2 = y.esquerda

    y.esquerda = x
    x.direita = T2

    x.altura = Math.max(altura(x.esquerda), altura(x.direita)) + 1
    y.altura = Math.max(altura(y.esquerda), altura(y.direita)) + 1

    return y
}

function inserir(no, valor) {

    if (no === null)
        return new No(valor)

    if (valor < no.valor)
        no.esquerda = inserir(no.esquerda, valor)

    else if (valor > no.valor)
        no.direita = inserir(no.direita, valor)

    else
        return no

    no.altura = 1 + Math.max(altura(no.esquerda), altura(no.direita))

    let balance = fatorBalanceamento(no)

    // LL
    if (balance > 1 && valor < no.esquerda.valor)
        return rotacaoDireita(no)

    // RR
    if (balance < -1 && valor > no.direita.valor)
        return rotacaoEsquerda(no)

    // LR
    if (balance > 1 && valor > no.esquerda.valor) {
        no.esquerda = rotacaoEsquerda(no.esquerda)
        return rotacaoDireita(no)
    }

    // RL
    if (balance < -1 && valor < no.direita.valor) {
        no.direita = rotacaoDireita(no.direita)
        return rotacaoEsquerda(no)
    }

    return no
}

function menorValor(no) {
    let atual = no

    while (atual.esquerda !== null)
        atual = atual.esquerda

    return atual
}

function remover(no, valor) {

    if (no === null)
        return no

    if (valor < no.valor)
        no.esquerda = remover(no.esquerda, valor)

    else if (valor > no.valor)
        no.direita = remover(no.direita, valor)

    else {

        if (no.esquerda === null || no.direita === null) {

            let temp = no.esquerda ? no.esquerda : no.direita

            if (temp === null) {
                no = null
            } else {
                no = temp
            }

        } else {

            let temp = menorValor(no.direita)

            no.valor = temp.valor

            no.direita = remover(no.direita, temp.valor)
        }
    }

    if (no === null)
        return no

    no.altura = 1 + Math.max(altura(no.esquerda), altura(no.direita))

    let balance = fatorBalanceamento(no)

    // LL
    if (balance > 1 && fatorBalanceamento(no.esquerda) >= 0)
        return rotacaoDireita(no)

    // LR
    if (balance > 1 && fatorBalanceamento(no.esquerda) < 0) {
        no.esquerda = rotacaoEsquerda(no.esquerda)
        return rotacaoDireita(no)
    }

    // RR
    if (balance < -1 && fatorBalanceamento(no.direita) <= 0)
        return rotacaoEsquerda(no)

    // RL
    if (balance < -1 && fatorBalanceamento(no.direita) > 0) {
        no.direita = rotacaoDireita(no.direita)
        return rotacaoEsquerda(no)
    }

    return no
}

function imprimirArvore(no, espaco = 0) {
    if (no === null) return

    espaco += 5

    imprimirArvore(no.direita, espaco)

    console.log(" ".repeat(espaco - 5) + no.valor)

    imprimirArvore(no.esquerda, espaco)
}





let raiz = null

let valores = [10, 20, 30, 40, 50, 25]

for (let v of valores) {
    raiz = inserir(raiz, v)
}

imprimirArvore(raiz)

raiz = remover(raiz, 40)

console.log("\n\n40 removido\n\n");
imprimirArvore(raiz)
