class NoBPlus {
    constructor(folha = false) {
        this.folha = folha;
        this.chaves = [];
        this.filhos = [];
    }
}

class ArvoreBPlus {
    constructor(ordem = 3) {
        this.raiz = new NoBPlus(true);
        this.ordem = ordem;
    }

    buscar(chave, no = this.raiz) {
        if (no.folha) {
            return no.chaves.find(c => c.nome === chave) || null;
        }

        let i = 0;
        while (i < no.chaves.length && chave >= no.chaves[i]) {
            i++;
        }

        return this.buscar(chave, no.filhos[i]);
    }

    inserir(nome, conteudo) {
        const raiz = this.raiz;

        if (raiz.chaves.length >= this.ordem - 1) {
            const novaRaiz = new NoBPlus(false);
            novaRaiz.filhos.push(raiz);

            this.dividir(novaRaiz, 0);
            this.raiz = novaRaiz;
        }

        this._inserir(this.raiz, { nome, conteudo });
    }

    _inserir(no, valor) {
        if (no.folha) {
            no.chaves.push(valor);
            no.chaves.sort((a, b) => a.nome.localeCompare(b.nome));
            return;
        }

        let i = 0;
        while (i < no.chaves.length && valor.nome >= no.chaves[i]) {
            i++;
        }

        if (!no.filhos[i]) {
            no.filhos[i] = new NoBPlus(true);
        }

        if (no.filhos[i].chaves.length >= this.ordem - 1) {
            this.dividir(no, i);

            if (valor.nome >= no.chaves[i]) {
                i++;
            }
        }

        this._inserir(no.filhos[i], valor);
    }

    dividir(pai, index) {
        const cheio = pai.filhos[index];
        const novo = new NoBPlus(cheio.folha);

        const meio = Math.floor(cheio.chaves.length / 2);

        if (cheio.folha) {
            novo.chaves = cheio.chaves.splice(meio);

            pai.chaves.splice(index, 0, novo.chaves[0].nome);
        } else {
            const promovido = cheio.chaves[meio];

            novo.chaves = cheio.chaves.splice(meio + 1);
            novo.filhos = cheio.filhos.splice(meio + 1);

            cheio.chaves.splice(meio);

            pai.chaves.splice(index, 0, promovido);
        }

        pai.filhos.splice(index + 1, 0, novo);
    }

    remover(nome, no = this.raiz) {
        if (no.folha) {
            no.chaves = no.chaves.filter(c => c.nome !== nome);
            return;
        }

        let i = 0;
        while (i < no.chaves.length && nome >= no.chaves[i]) {
            i++;
        }

        this.remover(nome, no.filhos[i]);
    }
}

// TESTE

const sistema = new ArvoreBPlus(3);

sistema.inserir("arquivoA.txt", "conteudo A");
sistema.inserir("arquivoB.txt", "conteudo B");
sistema.inserir("arquivoC.txt", "conteudo C");
sistema.inserir("arquivoD.txt", "conteudo D");

console.log("Busca:", sistema.buscar("arquivoC.txt"));

sistema.remover("arquivoB.txt");

console.log("Após remoção:", sistema.buscar("arquivoB.txt"));

console.log("\n----------------------\n");

console.time("Inserção");
for (let i = 0; i < 10000; i++) {
    sistema.inserir("file" + i, "conteudo");
}
console.timeEnd("Inserção");

console.time("Busca");
sistema.buscar("file9999");
console.timeEnd("Busca");

console.time("Remoção");
sistema.remover("file5000");
console.timeEnd("Remoção");