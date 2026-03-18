function calcularDistanciaTotal(caminho, matriz) {
    let distancia = 0;

    for (let i = 0; i < caminho.length - 1; i++) {
        distancia += matriz[caminho[i]][caminho[i + 1]];
    }

    distancia += matriz[caminho[caminho.length - 1]][caminho[0]];

    return distancia;
}

function permutar(arr) {
    if (arr.length === 1) return [arr];

    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        let atual = arr[i];
        let resto = arr.slice(0, i).concat(arr.slice(i + 1));

        let perms = permutar(resto);

        for (let p of perms) {
            resultado.push([atual, ...p]);
        }
    }

    return resultado;
}

function tspForcaBruta(matriz) {
    const cidades = [...Array(matriz.length).keys()];
    const permutacoes = permutar(cidades.slice(1));

    let melhorCaminho = null;
    let menorDistancia = Infinity;

    for (let perm of permutacoes) {
        let caminho = [0, ...perm];
        let distancia = calcularDistanciaTotal(caminho, matriz);

        if (distancia < menorDistancia) {
            menorDistancia = distancia;
            melhorCaminho = caminho;
        }
    }

    return { 
    melhorCaminho: [...melhorCaminho, melhorCaminho[0]], 
    menorDistancia 
    };
}

function tspVizinhoMaisProximo(matriz, inicio = 0) {
    const n = matriz.length;
    let visitado = Array(n).fill(false);
    let caminho = [inicio];
    let distancia = 0;

    visitado[inicio] = true;
    let atual = inicio;

    for (let i = 1; i < n; i++) {
        let proxima = -1;
        let menorDist = Infinity;

        for (let j = 0; j < n; j++) {
            if (!visitado[j] && matriz[atual][j] < menorDist) {
                menorDist = matriz[atual][j];
                proxima = j;
            }
        }

        caminho.push(proxima);
        visitado[proxima] = true;
        distancia += menorDist;
        atual = proxima;
    }

    distancia += matriz[atual][inicio];
    caminho.push(inicio);

    return { caminho, distancia };
}

const matriz5 = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

console.log(tspForcaBruta(matriz5));

const matriz10 = [
    [0,29,20,21,16,31,100,12,4,31],
    [29,0,15,29,28,40,72,21,29,41],
    [20,15,0,15,14,25,81,9,23,27],
    [21,29,15,0,4,12,92,12,25,13],
    [16,28,14,4,0,16,94,9,20,16],
    [31,40,25,12,16,0,95,24,36,3],
    [100,72,81,92,94,95,0,90,101,99],
    [12,21,9,12,9,24,90,0,15,25],
    [4,29,23,25,20,36,101,15,0,35],
    [31,41,27,13,16,3,99,25,35,0]
];

console.log(tspVizinhoMaisProximo(matriz10));

const matriz6 = [
  [0,10,15,20,10,25],
  [10,0,35,25,17,30],
  [15,35,0,30,28,40],
  [20,25,30,0,22,18],
  [10,17,28,22,0,26],
  [25,30,40,18,26,0]
];

const exato = tspForcaBruta(matriz6);
const aproximado = tspVizinhoMaisProximo(matriz6);

const diferenca = ((aproximado.distancia - exato.menorDistancia) / exato.menorDistancia) * 100;

console.log("\n------------------------\n");
console.log(`Diferença: ${diferenca.toFixed(2)}%`);

console.log("Força Bruta:", exato);
console.log("Vizinho Mais Próximo:", aproximado);

