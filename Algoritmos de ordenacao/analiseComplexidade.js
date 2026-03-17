function bubbleSort(arr) {

    let comparacoes = 0
    let trocas = 0
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {

        let trocou = false

        for (let j = 0; j < n - 1 - i; j++) {

            comparacoes++

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                trocas++
                trocou = true
            }

        }

        if (!trocou) break

    }

    return { comparacoes, trocas }
}

function gerarListaAleatoria(tamanho) {

    const lista = []

    for (let i = 0; i < tamanho; i++) {
        lista.push(Math.floor(Math.random() * 1000))
    }

    return lista
}

const tamanho = 100

// lista aleatória
const listaAleatoria = gerarListaAleatoria(tamanho)

// lista já ordenada
const listaOrdenada = [...listaAleatoria].sort((a,b) => a - b)

console.log("=== Lista Aleatória ===")

console.time("Bubble Sort Aleatorio")
const resultado1 = bubbleSort([...listaAleatoria])
console.timeEnd("Bubble Sort Aleatorio")

console.log("Comparações:", resultado1.comparacoes)
console.log("Trocas:", resultado1.trocas)


console.log("\n=== Lista Já Ordenada ===")

console.time("Bubble Sort Ordenado")
const resultado2 = bubbleSort([...listaOrdenada])
console.timeEnd("Bubble Sort Ordenado")

console.log("Comparações:", resultado2.comparacoes)
console.log("Trocas:", resultado2.trocas)