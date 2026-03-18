class FilaImpressao {
    constructor() {
        this.fila = [];
    }

    adicionarDocumento(doc) {
        this.fila.push(doc);
        console.log(`Documento "${doc}" adicionado à fila.`);
    }

    imprimir() {
        if (this.estaVazia()) {
            console.log("Fila vazia. Nada para imprimir.");
            return;
        }

        const doc = this.fila.shift();
        console.log(`Imprimindo: "${doc}"`);
    }

    estaVazia() {
        return this.fila.length === 0;
    }

    mostrarFila() {
        console.log("Fila atual:", this.fila);
    }
}

const impressora = new FilaImpressao();

impressora.adicionarDocumento("Relatório.pdf");
impressora.adicionarDocumento("Trabalho.docx");
impressora.adicionarDocumento("Foto.png");

impressora.mostrarFila();

impressora.imprimir();
impressora.imprimir();

impressora.mostrarFila();

console.log("\n------------------------------------------------------\n");

class Navegador {
    constructor() {
        this.voltar = [];
        this.avancar = [];
        this.paginaAtual = null;
    }

    acessarPagina(url) {
        if (this.paginaAtual !== null) {
            this.voltar.push(this.paginaAtual);
        }

        this.paginaAtual = url;
        this.avancar = [];

        console.log(`Acessando: ${url}`);
    }

    voltarPagina() {
        if (this.voltar.length === 0) {
            console.log("Não há páginas para voltar.");
            return;
        }

        this.avancar.push(this.paginaAtual);
        this.paginaAtual = this.voltar.pop();

        console.log(`Voltou para: ${this.paginaAtual}`);
    }

    avancarPagina() {
        if (this.avancar.length === 0) {
            console.log("Não há páginas para avançar.");
            return;
        }

        this.voltar.push(this.paginaAtual);
        this.paginaAtual = this.avancar.pop();

        console.log(`Avançou para: ${this.paginaAtual}`);
    }

    mostrarEstado() {
        console.log("Página atual:", this.paginaAtual);
        console.log("Voltar:", this.voltar);
        console.log("Avançar:", this.avancar);
    }
}

const nav = new Navegador();

nav.acessarPagina("google.com");
nav.acessarPagina("youtube.com");
nav.acessarPagina("github.com");

nav.voltarPagina();
nav.voltarPagina();

nav.avancarPagina();

nav.mostrarEstado();