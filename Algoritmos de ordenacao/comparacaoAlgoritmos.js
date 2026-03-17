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

function heapSort(arr) {

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
    let esquerda = 2 * i + 1
    let direita = 2 * i + 2

    if (esquerda < n && arr[esquerda] > arr[maior])
        maior = esquerda

    if (direita < n && arr[direita] > arr[maior])
        maior = direita

    if (maior !== i) {

        [arr[i], arr[maior]] = [arr[maior], arr[i]]

        heapify(arr, n, maior)
    }
}

function gerarLista(tamanho) {

    const lista = []

    for (let i = 0; i < tamanho; i++) {
        lista.push(Math.floor(Math.random() * 100000))
    }

    return lista
}

function testar(tamanho) {

    console.log("\n===== Teste com", tamanho, "elementos =====")

    const lista = gerarLista(tamanho)

    console.time("Merge Sort")
    mergeSort([...lista])
    console.timeEnd("Merge Sort")

    console.time("Quick Sort")
    quickSort([...lista])
    console.timeEnd("Quick Sort")

    console.time("Heap Sort")
    heapSort([...lista])
    console.timeEnd("Heap Sort")
}

testar(100)
testar(1000)
testar(10000)

const dados = [
 {valor:5, id:"A"},
 {valor:3, id:"B"},
 {valor:5, id:"C"},
 {valor:3, id:"D"},
 {valor:5, id:"E"}
]

function mergeSortObjetos(arr){

 if(arr.length <= 1) return arr

 const meio = Math.floor(arr.length/2)

 const esquerda = mergeSortObjetos(arr.slice(0, meio))
 const direita = mergeSortObjetos(arr.slice(meio))

 return mergeObjetos(esquerda, direita)
}

function mergeObjetos(esq, dir){

 let resultado = []

 while(esq.length && dir.length){

  if(esq[0].valor <= dir[0].valor){
   resultado.push(esq.shift())
  } else {
   resultado.push(dir.shift())
  }

 }

 return resultado.concat(esq, dir)
}

function quickSortObjetos(arr){

 if(arr.length <= 1) return arr

 const pivot = arr[arr.length-1]

 const menores = []
 const maiores = []

 for(let i=0;i<arr.length-1;i++){

  if(arr[i].valor < pivot.valor)
   menores.push(arr[i])
  else
   maiores.push(arr[i])

 }

 return [
  ...quickSortObjetos(menores),
  pivot,
  ...quickSortObjetos(maiores)
 ]
}

console.log("\n\nQuick Sort:")
console.log(quickSortObjetos([...dados]))

console.log("Merge Sort:")
console.log(mergeSortObjetos([...dados]))

