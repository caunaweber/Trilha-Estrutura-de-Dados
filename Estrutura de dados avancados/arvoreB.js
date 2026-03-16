function mostrarArvore(arvore, titulo) {

    console.log("\n" + titulo)

    for (let i = 0; i < arvore.length; i++) {
        console.log("Nivel", i + 1 + ":", JSON.stringify(arvore[i]))
    }

    console.log("----------------------------")
}


// Inserção 1
let arvore = [
    [[10]]
]

mostrarArvore(arvore, "Inserir 10")


// Inserção 2
arvore = [
    [[10,20]]
]

mostrarArvore(arvore, "Inserir 20")


// Inserção 3
arvore = [
    [[5,10,20]]
]

mostrarArvore(arvore, "Inserir 5")


// Inserção 4
arvore = [
    [[5,6,10,20]]
]

mostrarArvore(arvore, "Inserir 6")


// Inserção 5
arvore = [
    [[5,6,10,12,20]]
]

mostrarArvore(arvore, "Inserir 12")


// Inserção 6 (Split ocorre)
arvore = [
    [[10]],
    [[5,6],[12,20,30]]
]

mostrarArvore(arvore, "Inserir 30 (Split da raiz)")


// Inserção 7
arvore = [
    [[10]],
    [[5,6,7],[12,20,30]]
]

mostrarArvore(arvore, "Inserir 7")


// Inserção 8
arvore = [
    [[10]],
    [[5,6,7],[12,17,20,30]]
]

mostrarArvore(arvore, "Inserir 17")


// Remover 6
arvore = [
    [[10]],
    [[5,7],[12,17,20,30]]
]

mostrarArvore(arvore, "Remover 6")


// Remover 17
arvore = [
    [[10]],
    [[5,7],[12,20,30]]
]

mostrarArvore(arvore, "Remover 17")