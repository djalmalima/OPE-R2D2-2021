"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditarUsuarioComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Colaborador_1 = require("src/app/_model/Colaborador");
var Departamentos_1 = require("src/app/_model/Departamentos");
var EditarUsuarioComponent = /** @class */ (function () {
    function EditarUsuarioComponent(route, service, serviceDepartamento, router, toastr) {
        this.route = route;
        this.service = service;
        this.serviceDepartamento = serviceDepartamento;
        this.router = router;
        this.toastr = toastr;
        this.usuario = new Colaborador_1.Colaborador(false, '', '', '', new Departamentos_1.Departamentos(''));
        this.lista = [];
        this.id = 0;
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required]),
            ativo: new forms_1.FormControl('', [forms_1.Validators.required]),
            cargo: new forms_1.FormControl('', [forms_1.Validators.required]),
            telefone: new forms_1.FormControl('', [forms_1.Validators.required]),
            departamento: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    EditarUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        var depart;
        this.route.params.subscribe(function (parametrs) {
            _this.service.getUsuarioById(parametrs.id).subscribe(function (resposta) {
                _this.usuario = resposta, console.log(resposta),
                    _this.serviceDepartamento.getDepartamentoById(resposta.departamento.id).subscribe(function (resposta) {
                        depart = resposta,
                            _this.id = parametrs.id,
                            _this.formulario.controls.nome.setValue(_this.usuario.nome),
                            _this.formulario.controls.ativo.setValue(_this.usuario.ativo),
                            _this.formulario.controls.cargo.setValue(_this.usuario.cargo),
                            _this.formulario.controls.telefone.setValue(_this.usuario.telefone),
                            _this.formulario.controls.departamento.setValue(depart.id),
                            _this.serviceDepartamento.getDepartamentos().subscribe(function (resposta) { return _this.lista = resposta; });
                    });
            });
        });
    };
    EditarUsuarioComponent.prototype.alterarUsuario = function () {
        var _this = this;
        var depart;
        var colab;
        this.serviceDepartamento.getDepartamentoById(this.formulario.value.departamento).subscribe(function (resposta) {
            depart = resposta,
                colab = new Colaborador_1.Colaborador(_this.formulario.value.ativo, _this.formulario.value.nome, _this.formulario.value.cargo, _this.formulario.value.telefone, depart);
            _this.service.putUsuario(_this.id, colab).subscribe(function () { _this.toastr.info('Colaborador editado com sucesso!'), _this.router.navigate(['/home', 'colaboradores']); });
        });
    };
    EditarUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-editar-usuario',
            templateUrl: './editar-usuario.component.html',
            styleUrls: ['./editar-usuario.component.css']
        })
    ], EditarUsuarioComponent);
    return EditarUsuarioComponent;
}());
exports.EditarUsuarioComponent = EditarUsuarioComponent;
