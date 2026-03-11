function hanoi(n, origem, destino, auxiliar) {

    if (n === 1) {
        console.log(`Mover disco 1 de ${origem} para ${destino}`)
        return
    }

    hanoi(n - 1, origem, auxiliar, destino)

    console.log(`Mover disco ${n} de ${origem} para ${destino}`)

    hanoi(n - 1, auxiliar, destino, origem)
}

hanoi(3, "A", "C", "B")

//numero minimo de movimento T(n) = 2^n - 1
//complexidade de tempo O(2^n)