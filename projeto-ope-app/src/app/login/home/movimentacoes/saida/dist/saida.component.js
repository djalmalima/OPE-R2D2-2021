"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SaidaComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Movimentacao_1 = require("src/app/_model/Movimentacao");
var SaidaComponent = /** @class */ (function () {
    function SaidaComponent(fb, fornecedorServico, produtoServico, movimentacaoService, router, toastr) {
        this.fb = fb;
        this.fornecedorServico = fornecedorServico;
        this.produtoServico = produtoServico;
        this.movimentacaoService = movimentacaoService;
        this.router = router;
        this.toastr = toastr;
        this.tipoMovimentacao = ["Saida por venda", "Devolução de compra", "Bonificação"];
        this.idFornecedor = 0;
        this.listaFornecedor = [];
        this.listaProduto = [];
        this.carregarCrud = false;
        this.formulario = new forms_1.FormGroup({
            fornecedorId: new forms_1.FormControl(""),
            tipoMovimentacao: new forms_1.FormControl("", [forms_1.Validators.required]),
            produtos: new forms_1.FormArray([])
        });
    }
    Object.defineProperty(SaidaComponent.prototype, "produtos", {
        get: function () {
            return this.formulario.get('produtos');
        },
        enumerable: false,
        configurable: true
    });
    SaidaComponent.prototype.ngOnInit = function () {
        this.adicionarProduto();
    };
    SaidaComponent.prototype.removeServico = function (index) {
        this.produtos.removeAt(index);
    };
    SaidaComponent.prototype.adicionarProduto = function () {
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
    SaidaComponent.prototype.handleKeyDown = function (event) {
        if (event.key === 'Insert') {
            this.adicionarProduto();
        }
    };
    SaidaComponent.prototype.atualizarFornecedores = function (termo) {
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
    SaidaComponent.prototype.atualizaProduto = function (termo, index) {
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
    SaidaComponent.prototype.getFornecedor = function (fornecedorEscolhido) {
        this.idFornecedor = Number(fornecedorEscolhido.id);
        this.formulario.controls.fornecedorId.setValue(fornecedorEscolhido.nome);
        this.listaFornecedor = [];
    };
    SaidaComponent.prototype.buscaProduto = function (produtoEscolhio, id) {
        var _a, _b;
        (_a = this.produtos.controls[id].get('produtoId')) === null || _a === void 0 ? void 0 : _a.setValue(produtoEscolhio.id);
        (_b = this.produtos.controls[id].get('produtoNome')) === null || _b === void 0 ? void 0 : _b.setValue(produtoEscolhio.descricao);
        this.listaProduto = [];
    };
    SaidaComponent.prototype.verificarRepetido = function () {
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
    SaidaComponent.prototype.cadastrar = function () {
        var _this = this;
        if (!this.formulario.valid) {
            this.toastr.warning("Todos os campos deve ser preenchidos");
        }
        if (this.verificarRepetido()) {
            this.toastr.warning("Tem produtos repetidos, por favor verifique.");
        }
        if (!this.verificarRepetido() && this.formulario.valid) {
            var quantidade_1;
            var lista_1 = this.produtos.value;
            var controlador_1 = 0;
            var verificador_1 = true;
            lista_1.forEach(function (produto) {
                _this.produtoServico.getProdutoById(produto.produtoId).subscribe(function (resposta) {
                    var _a;
                    quantidade_1 = resposta.quantidade;
                    if (quantidade_1 < produto.quantidade || produto.quantidade == 0) {
                        verificador_1 = false;
                        _this.toastr.error("A quantidade do item " + produto.produtoNome + " é maior que o saldo em estoque: " + quantidade_1);
                        stop();
                    }
                    else {
                        controlador_1++;
                        var movimentacao = new Movimentacao_1.Movimentacao(_this.idFornecedor, produto.produtoId, new Date(), (_a = _this.formulario.get('tipoMovimentacao')) === null || _a === void 0 ? void 0 : _a.value, (produto.quantidade * -1));
                        _this.movimentacaoService.postMovimentacao(movimentacao).subscribe();
                    }
                });
            });
            setTimeout(function () {
                if (controlador_1 == lista_1.length && _this.formulario.valid && verificador_1) {
                    _this.carregarCrud = true;
                    setTimeout(function () {
                        _this.toastr.success("Movimentação de saida realizada com sucesso"),
                            _this.router.navigate(['/home', 'produtos']);
                    }, 2000);
                }
            }, 200);
        }
    };
    __decorate([
        core_1.HostListener('window:keydown', ['$event'])
    ], SaidaComponent.prototype, "handleKeyDown");
    SaidaComponent = __decorate([
        core_1.Component({
            selector: 'app-saida',
            templateUrl: './saida.component.html',
            styleUrls: ['./saida.component.css']
        })
    ], SaidaComponent);
    return SaidaComponent;
}());
exports.SaidaComponent = SaidaComponent;
