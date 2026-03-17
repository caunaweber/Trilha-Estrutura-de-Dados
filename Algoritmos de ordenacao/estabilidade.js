function heapSortEstavel(arr) {

    let n = arr.length

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i)

    for (let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] = [arr[i], arr[0]]

        heapify(arr, i, 0)
    }

    return arr
}

function heapify(arr, n, i) {

    let maior = i
    let esq = 2 * i + 1
    let dir = 2 * i + 2

    if (esq < n && comparar(arr[esq], arr[maior]))
        maior = esq

    if (dir < n && comparar(arr[dir], arr[maior]))
        maior = dir

    if (maior !== i) {

        [arr[i], arr[maior]] = [arr[maior], arr[i]]

        heapify(arr, n, maior)
    }
}

function comparar(a, b) {

    if (a.valor > b.valor) return true

    if (a.valor === b.valor)
        return a.indice > b.indice

    return false
}

function selectionSortEstavel(arr) {

    let n = arr.length

    for (let i = 0; i < n - 1; i++) {

        let min = i

        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[min])
                min = j
        }

        let chave = arr[min]

        while (min > i) {

            arr[min] = arr[min - 1]

            min--
        }

        arr[i] = chave
    }

    return arr
}

const dados = [
    { valor: 5, indice: 0 },
    { valor: 3, indice: 1 },
    { valor: 5, indice: 2 },
    { valor: 3, indice: 3 },
    { valor: 5, indice: 4 }
]

console.log(heapSortEstavel([...dados]))

const lista = [5, 3, 5, 3, 5]

console.log(selectionSortEstavel(lista))

// O Heap Sort não é naturalmente estável,
// pois realiza trocas entre elementos que podem alterar a ordem relativa de valores iguais.Para torná - lo estável,
// foi armazenado o índice original de cada elemento e utilizado como critério de desempate durante as comparações.

// O Selection Sort também não é estável em sua forma tradicional,
// pois utiliza trocas diretas entre elementos.Para garantir estabilidade,
// a troca foi substituída por um deslocamento dos elementos,
// inserindo o menor valor na posição correta sem alterar a ordem relativa dos elementos iguais.