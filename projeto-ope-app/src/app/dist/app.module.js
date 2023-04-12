"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./login/home/home.component");
var header_component_1 = require("./login/home/header/header.component");
var footer_component_1 = require("./login/home/footer/footer.component");
var content_component_1 = require("./login/home/content/content.component");
var departamento_component_1 = require("./login/home/departamento/departamento.component");
var http_1 = require("@angular/common/http");
var cadastrar_departamento_component_1 = require("./login/home/departamento/cadastrar-departamento/cadastrar-departamento.component");
var forms_1 = require("@angular/forms");
var colaboradores_component_1 = require("./login/home/colaboradores/colaboradores.component");
var cadastrar_usuario_component_1 = require("./login/home/colaboradores/cadastrar-usuario/cadastrar-usuario.component");
var editar_departamento_component_1 = require("./login/home/departamento/editar-departamento/editar-departamento.component");
var deletar_departamento_component_1 = require("./login/home/departamento/deletar-departamento/deletar-departamento.component");
var editar_usuario_component_1 = require("./login/home/colaboradores/editar-usuario/editar-usuario.component");
var deletar_usuario_component_1 = require("./login/home/colaboradores/deletar-usuario/deletar-usuario.component");
var produtos_component_1 = require("./login/home/produtos/produtos.component");
var cadastrar_produto_component_1 = require("./login/home/produtos/cadastrar-produto/cadastrar-produto.component");
var editar_produto_component_1 = require("./login/home/produtos/editar-produto/editar-produto.component");
var deletar_produto_component_1 = require("./login/home/produtos/deletar-produto/deletar-produto.component");
var fornecedores_component_1 = require("./login/home/fornecedores/fornecedores.component");
var cadastrar_fonecedor_component_1 = require("./login/home/fornecedores/cadastrar-fonecedor/cadastrar-fonecedor.component");
var editar_fonecedor_component_1 = require("./login/home/fornecedores/editar-fonecedor/editar-fonecedor.component");
var deletar_fornecedor_component_1 = require("./login/home/fornecedores/deletar-fornecedor/deletar-fornecedor.component");
var ngx_toastr_1 = require("ngx-toastr");
var common_1 = require("@angular/common");
var entrada_component_1 = require("./login/home/movimentacoes/entrada/entrada.component");
var saida_component_1 = require("./login/home/movimentacoes/saida/saida.component");
var mov_produto_component_1 = require("./login/home/relatorios/mov-produto/mov-produto.component");
var ficha_produto_component_1 = require("./login/home/relatorios/mov-produto/ficha-produto/ficha-produto.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                content_component_1.ContentComponent,
                departamento_component_1.DepartamentoComponent,
                cadastrar_departamento_component_1.CadastrarDepartamentoComponent,
                colaboradores_component_1.ColaboradoresComponent,
                cadastrar_usuario_component_1.CadastrarUsuarioComponent,
                editar_departamento_component_1.EditarDepartamentoComponent,
                deletar_departamento_component_1.DeletarDepartamentoComponent,
                editar_usuario_component_1.EditarUsuarioComponent,
                deletar_usuario_component_1.DeletarUsuarioComponent,
                produtos_component_1.ProdutosComponent,
                cadastrar_produto_component_1.CadastrarProdutoComponent,
                editar_produto_component_1.EditarProdutoComponent,
                deletar_produto_component_1.DeletarProdutoComponent,
                fornecedores_component_1.FornecedoresComponent,
                cadastrar_fonecedor_component_1.CadastrarFonecedorComponent,
                editar_fonecedor_component_1.EditarFonecedorComponent,
                deletar_fornecedor_component_1.DeletarFornecedorComponent,
                entrada_component_1.EntradaComponent,
                saida_component_1.SaidaComponent,
                mov_produto_component_1.MovProdutoComponent,
                ficha_produto_component_1.FichaProdutoComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
