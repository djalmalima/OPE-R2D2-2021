"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FichaProdutoComponent = void 0;
var core_1 = require("@angular/core");
var Produto_1 = require("src/app/_model/Produto");
var FichaProdutoComponent = /** @class */ (function () {
    function FichaProdutoComponent(produtoService, movimentacaoService, fornecedorService) {
        this.produtoService = produtoService;
        this.movimentacaoService = movimentacaoService;
        this.fornecedorService = fornecedorService;
        this.idProduto = 0;
        this.produto = new Produto_1.Produto('', '', '', '', '', '', '');
        this.listaMovimentacao = [];
        this.listaFornecedor = [];
        this.control = 0;
    }
    FichaProdutoComponent.prototype.ngOnInit = function () {
        this.atualizaFornecedores();
    };
    FichaProdutoComponent.prototype.atualizaFornecedores = function () {
        var _this = this;
        this.fornecedorService.getFornecedores().subscribe(function (resposta) { return _this.listaFornecedor = resposta; });
    };
    FichaProdutoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.idProduto != 0) {
            this.produtoService.getProdutoById(this.idProduto).subscribe(function (resposta) { _this.produto = resposta; });
            this.movimentacaoService.getMovimentacaoProdutpById(this.idProduto).subscribe(function (resposta) { _this.listaMovimentacao = resposta; });
        }
    };
    FichaProdutoComponent.prototype.atualizaFornecedorNome = function (id) {
        if (id == 999999) {
            return "Inventário";
        }
        if (id != 0) {
            return this.listaFornecedor[id - 1].nome;
        }
        return "Saida";
    };
    __decorate([
        core_1.Input()
    ], FichaProdutoComponent.prototype, "idProduto");
    FichaProdutoComponent = __decorate([
        core_1.Component({
            selector: 'app-ficha-produto',
            templateUrl: './ficha-produto.component.html',
            styleUrls: ['./ficha-produto.component.css']
        })
    ], FichaProdutoComponent);
    return FichaProdutoComponent;
}());
exports.FichaProdutoComponent = FichaProdutoComponent;
