function mergeSort(arr) {

    if (arr.length <= 1) return arr

    const meio = Math.floor(arr.length / 2)

    const esquerda = mergeSort(arr.slice(0, meio))
    const direita = mergeSort(arr.slice(meio))

    return merge(esquerda, direita)
}

function merge(esq, dir) {

    let resultado = []
    let i = 0
    let j = 0

    while (i < esq.length && j < dir.length) {

        if (esq[i] < dir[j]) {
            resultado.push(esq[i])
            i++
        } else {
            resultado.push(dir[j])
            j++
        }

    }

    return resultado
        .concat(esq.slice(i))
        .concat(dir.slice(j))
}

function quickSort(arr) {

    if (arr.length <= 1) return arr

    const pivot = arr[arr.length - 1]

    const menores = []
    const maiores = []

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot)
            menores.push(arr[i])
        else
            maiores.push(arr[i])

    }

    return [
        ...quickSort(menores),
        pivot,
        ...quickSort(maiores)
    ]
}

function quickSortMediana(arr) {

    if (arr.length <= 1) return arr

    const inicio = arr[0]
    const meio = arr[Math.floor(arr.length / 2)]
    const fim = arr[arr.length - 1]

    const pivot = [inicio, meio, fim].sort((a,b) => a-b)[1]

    const menores = []
    const iguais = []
    const maiores = []

    for (let num of arr) {

        if (num < pivot)
            menores.push(num)
        else if (num > pivot)
            maiores.push(num)
        else
            iguais.push(num)

    }

    return [
        ...quickSortMediana(menores),
        ...iguais,
        ...quickSortMediana(maiores)
    ]
}

function gerarLista(tamanho) {

    const lista = []

    for (let i = 0; i < tamanho; i++) {
        lista.push(Math.floor(Math.random() * 1000))
    }

    return lista
}

const lista = gerarLista(50)

console.log("Lista original:")
console.log(lista)

console.time("Merge Sort")
mergeSort([...lista])
console.timeEnd("Merge Sort")

console.time("Quick Sort")
quickSort([...lista])
console.timeEnd("Quick Sort")

console.time("Quick Sort Mediana")
quickSortMediana([...lista])
console.timeEnd("Quick Sort Mediana")