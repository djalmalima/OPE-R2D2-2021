"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditarFonecedorComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Fornecedor_1 = require("src/app/_model/Fornecedor");
var EditarFonecedorComponent = /** @class */ (function () {
    function EditarFonecedorComponent(router, activeRoute, serviceFornecedor, toastr) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.serviceFornecedor = serviceFornecedor;
        this.toastr = toastr;
        this.fornecedor = new Fornecedor_1.Fornecedor(false, '', '', '', '', '');
        this.id = 0;
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required]),
            ativo: new forms_1.FormControl('', [forms_1.Validators.required]),
            documento: new forms_1.FormControl('', [forms_1.Validators.required]),
            tipo: new forms_1.FormControl('', [forms_1.Validators.required]),
            telefone: new forms_1.FormControl('', [forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email])
        });
    }
    EditarFonecedorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (parametro) {
            _this.serviceFornecedor.getFornecedorById(parametro.id).subscribe(function (resposta) {
                _this.fornecedor = resposta, _this.id = parametro.id,
                    _this.formulario.controls.nome.setValue(_this.fornecedor.nome),
                    _this.formulario.controls.ativo.setValue(_this.fornecedor.ativo),
                    _this.formulario.controls.documento.setValue(_this.fornecedor.documento),
                    _this.formulario.controls.tipo.setValue(_this.fornecedor.tipo),
                    _this.formulario.controls.telefone.setValue(_this.fornecedor.telefone),
                    _this.formulario.controls.email.setValue(_this.fornecedor.email);
            });
        });
    };
    EditarFonecedorComponent.prototype.editarFornecedor = function () {
        var _this = this;
        var fornecedoEditado = new Fornecedor_1.Fornecedor(this.formulario.value.ativo, this.formulario.value.nome, this.formulario.value.documento, this.formulario.value.tipo, this.formulario.value.telefone, this.formulario.value.email);
        console.log(fornecedoEditado);
        this.serviceFornecedor.putFornecedor(this.id, fornecedoEditado).subscribe(function () { _this.toastr.info('Fornecedor editado com sucesso!'), _this.router.navigate(['/home', 'fornecedores']); });
    };
    EditarFonecedorComponent = __decorate([
        core_1.Component({
            selector: 'app-editar-fonecedor',
            templateUrl: './editar-fonecedor.component.html',
            styleUrls: ['./editar-fonecedor.component.css']
        })
    ], EditarFonecedorComponent);
    return EditarFonecedorComponent;
}());
exports.EditarFonecedorComponent = EditarFonecedorComponent;
