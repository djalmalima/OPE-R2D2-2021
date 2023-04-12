"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovProdutoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MovProdutoComponent = /** @class */ (function () {
    function MovProdutoComponent(produtoServico) {
        this.produtoServico = produtoServico;
        this.listaProduto = [];
        this.idProduto = 0;
        this.formulario = new forms_1.FormGroup({
            produtoNome: new forms_1.FormControl("")
        });
    }
    MovProdutoComponent.prototype.ngOnInit = function () {
    };
    MovProdutoComponent.prototype.atualizaProduto = function (termo) {
        var _this = this;
        if (termo.trim() === '') {
            this.idProduto = 0;
            this.listaProduto = [];
        }
        else {
            var listaAuxiliar_1 = [];
            this.listaProduto = [];
            this.produtoServico.getProdutos().subscribe(function (resposta) {
                listaAuxiliar_1 = resposta,
                    listaAuxiliar_1.forEach(function (produto) {
                        if (produto.descricao.toLowerCase().includes(termo.toLowerCase()) || produto.id === Number(termo)) {
                            _this.listaProduto.push(produto);
                        }
                    });
            });
        }
    };
    MovProdutoComponent.prototype.buscaProduto = function (produtoEscolhio) {
        var _a;
        (_a = this.formulario.get('produtoNome')) === null || _a === void 0 ? void 0 : _a.setValue(produtoEscolhio.descricao);
        this.idProduto = Number(produtoEscolhio.id);
        this.listaProduto = [];
    };
    MovProdutoComponent = __decorate([
        core_1.Component({
            selector: 'app-mov-produto',
            templateUrl: './mov-produto.component.html',
            styleUrls: ['./mov-produto.component.css']
        })
    ], MovProdutoComponent);
    return MovProdutoComponent;
}());
exports.MovProdutoComponent = MovProdutoComponent;
