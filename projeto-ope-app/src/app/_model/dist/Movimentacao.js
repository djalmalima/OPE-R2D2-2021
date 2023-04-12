"use strict";
exports.__esModule = true;
exports.Movimentacao = void 0;
var Movimentacao = /** @class */ (function () {
    function Movimentacao(fornecedorId, produtoId, dataMovimentacao, movimentacaoTipo, quantidade) {
        this.fornecedorId = fornecedorId;
        this.produtoId = produtoId;
        this.dataMovimentacao = dataMovimentacao;
        this.movimentacaoTipo = movimentacaoTipo;
        this.quantidade = quantidade;
        this.id = null;
    }
    return Movimentacao;
}());
exports.Movimentacao = Movimentacao;
