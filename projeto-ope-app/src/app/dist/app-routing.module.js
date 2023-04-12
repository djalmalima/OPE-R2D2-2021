"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cadastrar_usuario_component_1 = require("./login/home/colaboradores/cadastrar-usuario/cadastrar-usuario.component");
var colaboradores_component_1 = require("./login/home/colaboradores/colaboradores.component");
var editar_usuario_component_1 = require("./login/home/colaboradores/editar-usuario/editar-usuario.component");
var content_component_1 = require("./login/home/content/content.component");
var cadastrar_departamento_component_1 = require("./login/home/departamento/cadastrar-departamento/cadastrar-departamento.component");
var departamento_component_1 = require("./login/home/departamento/departamento.component");
var editar_departamento_component_1 = require("./login/home/departamento/editar-departamento/editar-departamento.component");
var cadastrar_fonecedor_component_1 = require("./login/home/fornecedores/cadastrar-fonecedor/cadastrar-fonecedor.component");
var editar_fonecedor_component_1 = require("./login/home/fornecedores/editar-fonecedor/editar-fonecedor.component");
var fornecedores_component_1 = require("./login/home/fornecedores/fornecedores.component");
var home_component_1 = require("./login/home/home.component");
var entrada_component_1 = require("./login/home/movimentacoes/entrada/entrada.component");
var inventario_component_1 = require("./login/home/movimentacoes/inventario/inventario.component");
var saida_component_1 = require("./login/home/movimentacoes/saida/saida.component");
var cadastrar_produto_component_1 = require("./login/home/produtos/cadastrar-produto/cadastrar-produto.component");
var editar_produto_component_1 = require("./login/home/produtos/editar-produto/editar-produto.component");
var produtos_component_1 = require("./login/home/produtos/produtos.component");
var mov_produto_component_1 = require("./login/home/relatorios/mov-produto/mov-produto.component");
var login_component_1 = require("./login/login.component");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: '', component: content_component_1.ContentComponent },
            { path: 'departamentos', component: departamento_component_1.DepartamentoComponent },
            { path: 'fornecedores', component: fornecedores_component_1.FornecedoresComponent },
            { path: 'cadastrardepart', component: cadastrar_departamento_component_1.CadastrarDepartamentoComponent },
            { path: 'colaboradores', component: colaboradores_component_1.ColaboradoresComponent },
            { path: 'cadastrarusuario', component: cadastrar_usuario_component_1.CadastrarUsuarioComponent },
            { path: 'editardepart/:id', component: editar_departamento_component_1.EditarDepartamentoComponent },
            { path: 'editarusuario/:id', component: editar_usuario_component_1.EditarUsuarioComponent },
            { path: 'editarproduto/:id', component: editar_produto_component_1.EditarProdutoComponent },
            { path: 'editarfornecedor/:id', component: editar_fonecedor_component_1.EditarFonecedorComponent },
            { path: 'produtos', component: produtos_component_1.ProdutosComponent },
            { path: 'cadastrarproduto', component: cadastrar_produto_component_1.CadastrarProdutoComponent },
            { path: 'cadatrarfornecedor', component: cadastrar_fonecedor_component_1.CadastrarFonecedorComponent },
            { path: 'entradaproduto', component: entrada_component_1.EntradaComponent },
            { path: 'saidaproduto', component: saida_component_1.SaidaComponent },
            { path: 'inventario', component: inventario_component_1.InventarioComponent },
            { path: 'fichaestoque', component: mov_produto_component_1.MovProdutoComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
