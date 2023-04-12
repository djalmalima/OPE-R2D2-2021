"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BuscaDepartamentosService = void 0;
var core_1 = require("@angular/core");
var BuscaDepartamentosService = /** @class */ (function () {
    function BuscaDepartamentosService(http) {
        this.http = http;
        this.URL_MOVIMENTACAO = 'http://localhost:8080/movimentacao';
    }
    BuscaDepartamentosService.prototype.getDepartamentos = function () {
        return this.http.get("" + this.URL_MOVIMENTACAO);
    };
    BuscaDepartamentosService.prototype.getDepartamentoById = function (id) {
        return this.http.get(this.URL_MOVIMENTACAO + "/" + id);
    };
    BuscaDepartamentosService.prototype.postDepartamento = function (movimentacao) {
        return this.http.post("" + this.URL_MOVIMENTACAO, movimentacao);
    };
    BuscaDepartamentosService.prototype.putDepartamento = function (id, movimentacao) {
        return this.http.put(this.URL_MOVIMENTACAO + "/" + id, movimentacao);
    };
    BuscaDepartamentosService.prototype.deleteDepartamento = function (id) {
        return this.http["delete"](this.URL_MOVIMENTACAO + "/" + id);
    };
    BuscaDepartamentosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BuscaDepartamentosService);
    return BuscaDepartamentosService;
}());
exports.BuscaDepartamentosService = BuscaDepartamentosService;
