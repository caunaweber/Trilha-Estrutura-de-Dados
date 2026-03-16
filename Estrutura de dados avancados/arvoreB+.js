function mostrarArvore(arvore, folhas, titulo) {

    console.log("\n" + titulo)

    for (let i = 0; i < arvore.length; i++) {
        console.log("Nivel", i + 1 + ":", JSON.stringify(arvore[i]))
    }

    console.log("Folhas ligadas:", folhas.map(f => `[${f.join(" ")}]`).join(" -> "))
    console.log("-----------------------------------")
}


// Inserir 15
let arvore = [
    [[15]]
]

let folhas = [
    [15]
]

mostrarArvore(arvore, folhas, "Inserir 15")


// Inserir 5
arvore = [
    [[5,15]]
]

folhas = [
    [5,15]
]

mostrarArvore(arvore, folhas, "Inserir 5")


// Inserir 25
arvore = [
    [[5,15,25]]
]

folhas = [
    [5,15,25]
]

mostrarArvore(arvore, folhas, "Inserir 25")


// Inserir 10 (split da folha)
arvore = [
    [[15]],
    [[5,10],[15,25]]
]

folhas = [
    [5,10],
    [15,25]
]

mostrarArvore(arvore, folhas, "Inserir 10 (split)")


// Inserir 20
arvore = [
    [[15]],
    [[5,10],[15,20,25]]
]

folhas = [
    [5,10],
    [15,20,25]
]

mostrarArvore(arvore, folhas, "Inserir 20")


// Inserir 30 (novo split)
arvore = [
    [[15,25]],
    [[5,10],[15,20],[25,30]]
]

folhas = [
    [5,10],
    [15,20],
    [25,30]
]

mostrarArvore(arvore, folhas, "Inserir 30 (split)")


// Inserir 35
arvore = [
    [[15,25]],
    [[5,10],[15,20],[25,30,35]]
]

folhas = [
    [5,10],
    [15,20],
    [25,30,35]
]

mostrarArvore(arvore, folhas, "Inserir 35")