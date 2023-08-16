import { Cardapio } from "./Cardapio.js";
import { Pagamento } from "./Pagamento.js";

class Carrinho {
    constructor() {
        this.carrinho = {};
    }

    adicionarItem(codigo, quantidade) {
        if (!this.carrinho[codigo]) {
            this.carrinho[codigo] = 0;
        }
        this.carrinho[codigo] += quantidade;
    }

    //total de itens carrinho
    calcularTotal(){
        let total = 0;
        for (const codigo in this.carrinho) {
            const quantidade = this.carrinho[codigo];
            total += quantidade;
        }
        if (this.total === 0) {
            console.log('Não há itens no carrinho de compra!');
        }
    }
}

export { Carrinho };
