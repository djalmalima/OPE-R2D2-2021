"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProdutosComponent = void 0;
var core_1 = require("@angular/core");
var ProdutosComponent = /** @class */ (function () {
    function ProdutosComponent(produtoService) {
        this.produtoService = produtoService;
        this.idProduto = 1;
        this.listProdutos = [];
        this.busca = '';
    }
    ProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtoService.getProdutos().subscribe(function (resposta) { return _this.listProdutos = resposta; }, function (error) { return alert('Erro ao iniciar a pagina!' + error); });
    };
    ProdutosComponent.prototype.passaId = function (id) {
        this.idProduto = id;
    };
    ProdutosComponent.prototype.filtrar = function ($event) {
        var _this = this;
        this.busca = $event.target.value;
        if (this.busca.length === 0) {
            this.produtoService.getProdutos().subscribe(function (resposta) { return _this.listProdutos = resposta; }, function (error) { return alert('Erro ao iniciar a pagina!' + error); });
        }
        else {
            this.produtoService.getProdutos().subscribe(function (resposta) {
                var listafiltrata = [];
                for (var _i = 0, resposta_1 = resposta; _i < resposta_1.length; _i++) {
                    var produto = resposta_1[_i];
                    if (produto.descricao.toLowerCase().includes(_this.busca.toLowerCase()) || produto.cor.toLowerCase().includes(_this.busca.toLowerCase())) {
                        listafiltrata.push(produto);
                    }
                }
                _this.listProdutos = listafiltrata;
            });
        }
    };
    ProdutosComponent = __decorate([
        core_1.Component({
            selector: 'app-produtos',
            templateUrl: './produtos.component.html',
            styleUrls: ['./produtos.component.css']
        })
    ], ProdutosComponent);
    return ProdutosComponent;
}());
exports.ProdutosComponent = ProdutosComponent;
