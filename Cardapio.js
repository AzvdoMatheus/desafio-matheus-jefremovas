class Cardapio {
    constructor() {
        this.itens = {
            cafe: { valor: 3.00 },
            chantily: { valor: 1.50 }, //apenas com cafe
            suco: { valor: 6.20 },
            sanduiche: { valor: 6.50 },
            queijo: { valor: 2.00 }, //apenas com sanduiche
            salgado: { valor: 7.25 },
            combo1: { valor: 9.50 },
            combo2: { valor: 7.50 }
        };
    }

    verificarRestricoesExtras(codigo, carrinho) {
        if (codigo === 'chantily') {
            if (!carrinho['cafe']) {
                return "Item extra não pode ser pedido sem o principal";
            }
        } 
        if (codigo === 'queijo') {
            if (!carrinho['sanduiche']) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }
        return null; //sem restrições
    }

    calcularValorCompra(formaDePagamento, carrinho) {
        let valorTotal = 0;

        for (const codigo in carrinho) {
            const quantidade = carrinho[codigo];

            const restricaoExtras = this.verificarRestricoesExtras(codigo, carrinho);
            if (restricaoExtras) {
                return restricaoExtras;
            }

            const itens = this.itens[codigo];
            valorTotal += itens.valor * quantidade;
        }

        if (formaDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } 
        if (formaDePagamento === 'credito') {
            valorTotal *= 1.03;
        }

        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { Cardapio };
