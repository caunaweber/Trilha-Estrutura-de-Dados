function buscaForcaBruta(texto, padrao) {
    let n = texto.length;
    let m = padrao.length;
    let ocorrencias = [];

    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        while (j < m && texto[i + j] === padrao[j]) {
            j++;
        }

        if (j === m) {
            ocorrencias.push(i);
        }
    }

    return ocorrencias;
}

const texto = "abracadabra";
const padrao = "abra";

console.log(buscaForcaBruta(texto, padrao));

function construirLPS(padrao) {
    let lps = Array(padrao.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < padrao.length) {
        if (padrao[i] === padrao[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function buscaKMP(texto, padrao) {
    let n = texto.length;
    let m = padrao.length;

    let lps = construirLPS(padrao);
    let ocorrencias = [];

    let i = 0;
    let j = 0;

    while (i < n) {
        if (texto[i] === padrao[j]) {
            i++;
            j++;
        }

        if (j === m) {
            ocorrencias.push(i - j);
            j = lps[j - 1];
        } else if (i < n && texto[i] !== padrao[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return ocorrencias;
}

console.log(buscaKMP("abracadabra", "abra"));

const textoGrande = "a".repeat(100000) + "b";
const padraoGrande = "aaab";

console.time("Força Bruta");
buscaForcaBruta(textoGrande, padraoGrande);
console.timeEnd("Força Bruta");

console.time("KMP");
buscaKMP(textoGrande, padraoGrande);
console.timeEnd("KMP");