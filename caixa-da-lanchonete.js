import { Cardapio } from "./Cardapio.js";
import {Carrinho } from "./Carrinho.js";
import { Pagamento } from "./Pagamento.js";

class CaixaDaLanchonete {
    constructor() {
        this.cardapio = new Cardapio();   
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        const carrinho = new Carrinho();
        for (const infoItem of itens) {
            const [codigo, quantidade] = infoItem.split(',');
            carrinho.adicionarItem(codigo, parseInt(quantidade));
        }

        const valorDaCompra = this.cardapio.calcularValorCompra(formaDePagamento, carrinho.carrinho);

        if (typeof valorDaCompra === 'string') {
            return valorDaCompra;
        } else {
            return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        }
    }
}

export {CaixaDaLanchonete};
