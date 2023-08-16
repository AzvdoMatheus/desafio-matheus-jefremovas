import { Cardapio } from "./Cardapio.js";
import {Carrinho } from "./Carrinho.js";

class Pagamento {
    constructor(){
        this.formaDePagamento = {
            credito,
            debito,
            dinheiro
        };
    }

    InformarFormaPgmto(){
        if (formaDePagamento !== 'credito' && formaDePagamento !== 'debito' &&
        formaDePagamento!=="dinheiro"){
            return 'Forma de pagamento inválida.';
        } else{
            this.formaDePagamento = formaDePagamento;
        }
        
        let valorTotal = 0;

        if (formaDePagamento === 'dinheiro'){
            this.valorTotal *= 0.95;
        } 
        if (formaDePagamento === 'credito'){
            this.valorTotal *= 1.03;
        } else{
            valorTotal += valorTotal;
        }

        const pagamento = new Pagamento(formaDePagamento);
        pagamento.informarFormaPgmto();
    }
}    
export { Pagamento };
