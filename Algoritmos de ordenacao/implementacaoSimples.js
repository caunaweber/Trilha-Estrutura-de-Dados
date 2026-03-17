function selectionSort(arr) {

    let comparacoes = 0
    let trocas = 0

    for (let i = 0; i < arr.length - 1; i++) {

        let menor = i

        for (let j = i + 1; j < arr.length; j++) {

            comparacoes++

            if (arr[j] < arr[menor]) {
                menor = j
            }

        }

        if (menor !== i) {

            let temp = arr[i]
            arr[i] = arr[menor]
            arr[menor] = temp

            trocas++

        }

    }

    return { array: arr, comparacoes, trocas }
}

function insertionSortStrings(arr) {

    for (let i = 1; i < arr.length; i++) {

        let chave = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > chave) {

            arr[j + 1] = arr[j]
            j--

        }

        arr[j + 1] = chave

    }

    return arr
}

const numeros = [64, 25, 12, 22, 11, 90, 34, 7, 18, 3]

const resultado = selectionSort(numeros)

console.log("Array ordenado:", resultado.array)
console.log("Comparações:", resultado.comparacoes)
console.log("Trocas:", resultado.trocas)

console.log("\n------------------------------\n");

const palavras = ["banana", "uva", "abacaxi", "laranja", "maça"]

const ordenado = insertionSortStrings(palavras)

console.log("Palavras ordenadas:")
console.log(ordenado)