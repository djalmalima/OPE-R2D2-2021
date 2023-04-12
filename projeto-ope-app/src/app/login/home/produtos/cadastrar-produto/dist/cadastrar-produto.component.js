"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastrarProdutoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Produto_1 = require("src/app/_model/Produto");
var CadastrarProdutoComponent = /** @class */ (function () {
    function CadastrarProdutoComponent(router, serviceProduto, toastr) {
        this.router = router;
        this.serviceProduto = serviceProduto;
        this.toastr = toastr;
        this.listaCores = ['Vermelho', 'Branco', 'Preto', 'Verde', 'Amarelo', 'Cinza'];
        this.listaTamanho = ['P', 'M', 'G', 'GG', 'XG'];
        this.listaCategoria = ['Animes', 'Games', 'Nostalgia', 'Serie/TV', 'Cinema', 'Herois'];
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            descricao: new forms_1.FormControl('', [forms_1.Validators.required]),
            categoria: new forms_1.FormControl('', [forms_1.Validators.required]),
            cor: new forms_1.FormControl('', [forms_1.Validators.required]),
            tamanho: new forms_1.FormControl('', [forms_1.Validators.required]),
            marca: new forms_1.FormControl('', [forms_1.Validators.required]),
            imagem: new forms_1.FormControl('')
        });
    }
    CadastrarProdutoComponent.prototype.ngOnInit = function () {
        this.listaCores.sort();
        this.listaCategoria.sort();
    };
    CadastrarProdutoComponent.prototype.cadastrar = function () {
        var _this = this;
        var produto = new Produto_1.Produto(this.formulario.value.nome, this.formulario.value.cor, this.formulario.value.tamanho, this.formulario.value.marca, this.formulario.value.categoria, this.formulario.value.descricao, this.formulario.value.imagem);
        this.serviceProduto.postProduto(produto).subscribe(function () { _this.toastr.success('Produto cadastrado com sucesso!'), _this.router.navigate(['/home', 'produtos']); });
    };
    CadastrarProdutoComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastrar-produto',
            templateUrl: './cadastrar-produto.component.html',
            styleUrls: ['./cadastrar-produto.component.css']
        })
    ], CadastrarProdutoComponent);
    return CadastrarProdutoComponent;
}());
exports.CadastrarProdutoComponent = CadastrarProdutoComponent;
