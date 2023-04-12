"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EntradaComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Movimentacao_1 = require("src/app/_model/Movimentacao");
var EntradaComponent = /** @class */ (function () {
    function EntradaComponent(fb, fornecedorServico, produtoServico, movimentacaoService, router, toastr) {
        this.fb = fb;
        this.fornecedorServico = fornecedorServico;
        this.produtoServico = produtoServico;
        this.movimentacaoService = movimentacaoService;
        this.router = router;
        this.toastr = toastr;
        this.tipoMovimentacao = ["Entrada por compras", "Devolução de venda", "Bonificação"];
        this.idFornecedor = 0;
        this.listaFornecedor = [];
        this.listaProduto = [];
        this.carregarCrud = false;
        this.formulario = new forms_1.FormGroup({
            fornecedorId: new forms_1.FormControl("", [forms_1.Validators.required]),
            tipoMovimentacao: new forms_1.FormControl("", [forms_1.Validators.required]),
            produtos: new forms_1.FormArray([])
        });
    }
    Object.defineProperty(EntradaComponent.prototype, "produtos", {
        get: function () {
            return this.formulario.get('produtos');
        },
        enumerable: false,
        configurable: true
    });
    EntradaComponent.prototype.ngOnInit = function () {
        this.adicionarProduto();
    };
    EntradaComponent.prototype.removeServico = function (index) {
        this.produtos.removeAt(index);
    };
    EntradaComponent.prototype.adicionarProduto = function () {
        if (this.produtos.valid === false) {
            this.toastr.warning("Não é possivel adicionar produto, até que todos produtos não sejam preenchidos.", "Entrada de Produtos");
        }
        else {
            var produto = this.fb.group({
                produtoNome: new forms_1.FormControl("", forms_1.Validators.required),
                produtoId: new forms_1.FormControl("", forms_1.Validators.required),
                quantidade: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.min(1)])
            });
            this.produtos.push(produto);
        }
    };
    EntradaComponent.prototype.handleKeyDown = function (event) {
        if (event.key === 'Insert') {
            this.adicionarProduto();
        }
    };
    EntradaComponent.prototype.atualizarFornecedores = function (termo) {
        var _this = this;
        if (termo.trim() === '') {
            this.listaFornecedor = [];
        }
        else {
            var listaAuxiliar_1 = [];
            this.listaFornecedor = [];
            this.fornecedorServico.getFornecedores().subscribe(function (resposta) {
                listaAuxiliar_1 = resposta,
                    listaAuxiliar_1.forEach(function (fornecedor) {
                        if (fornecedor.nome.toLowerCase().includes(termo.toLowerCase()) || fornecedor.id === Number(termo)) {
                            _this.listaFornecedor.push(fornecedor);
                        }
                    });
            });
        }
    };
    EntradaComponent.prototype.atualizaProduto = function (termo, index) {
        var _this = this;
        var _a;
        if (termo.trim() === '') {
            this.listaProduto = [];
            (_a = this.produtos.controls[index].get('quantidade')) === null || _a === void 0 ? void 0 : _a.setValue("");
        }
        else {
            var listaAuxiliar_2 = [];
            this.listaProduto = [];
            this.produtoServico.getProdutos().subscribe(function (resposta) {
                listaAuxiliar_2 = resposta,
                    listaAuxiliar_2.forEach(function (produto) {
                        if (produto.descricao.toLowerCase().includes(termo.toLowerCase()) || produto.id === Number(termo)) {
                            _this.listaProduto.push(produto);
                        }
                    });
            });
        }
    };
    EntradaComponent.prototype.getFornecedor = function (fornecedorEscolhido) {
        this.idFornecedor = Number(fornecedorEscolhido.id);
        this.formulario.controls.fornecedorId.setValue(fornecedorEscolhido.nome);
        this.listaFornecedor = [];
    };
    EntradaComponent.prototype.buscaProduto = function (produtoEscolhio, id) {
        var _a, _b;
        (_a = this.produtos.controls[id].get('produtoId')) === null || _a === void 0 ? void 0 : _a.setValue(produtoEscolhio.id);
        (_b = this.produtos.controls[id].get('produtoNome')) === null || _b === void 0 ? void 0 : _b.setValue(produtoEscolhio.descricao);
        this.listaProduto = [];
    };
    EntradaComponent.prototype.verificarRepetido = function () {
        var validacao = false;
        var listaVazia = [];
        var listaCheia = this.produtos.value;
        listaCheia.forEach(function (element) {
            if (listaVazia.includes(element.produtoId)) {
                validacao = true;
            }
            else {
                listaVazia.push(element.produtoId);
            }
        });
        return validacao;
    };
    EntradaComponent.prototype.cadastrar = function () {
        var _this = this;
        if (this.verificarRepetido()) {
            this.toastr.warning("Tem produtos repetidos, por favor verifique.");
        }
        if (!this.formulario.valid) {
            this.toastr.warning("Todos campos devem ser preenchidos");
        }
        if (this.formulario.valid && !this.verificarRepetido()) {
            console.log(this.produtos.value);
            var lista = this.produtos.value;
            lista.forEach(function (produto) {
                var _a;
                var movimentacao = new Movimentacao_1.Movimentacao(_this.idFornecedor, produto.produtoId, new Date(), (_a = _this.formulario.get('tipoMovimentacao')) === null || _a === void 0 ? void 0 : _a.value, produto.quantidade);
                _this.movimentacaoService.postMovimentacao(movimentacao).subscribe();
            });
            this.carregarCrud = true;
            setTimeout(function () {
                setTimeout(function () {
                    _this.toastr.success("Movimentação de entrada realizada com sucesso"),
                        _this.router.navigate(['/home', 'produtos']);
                }, 2000);
            }, 500);
        }
    };
    __decorate([
        core_1.HostListener('window:keydown', ['$event'])
    ], EntradaComponent.prototype, "handleKeyDown");
    EntradaComponent = __decorate([
        core_1.Component({
            selector: 'app-entrada',
            templateUrl: './entrada.component.html',
            styleUrls: ['./entrada.component.css']
        })
    ], EntradaComponent);
    return EntradaComponent;
}());
exports.EntradaComponent = EntradaComponent;
