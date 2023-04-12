import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './login/home/colaboradores/cadastrar-usuario/cadastrar-usuario.component';
import { ColaboradoresComponent } from './login/home/colaboradores/colaboradores.component';
import { EditarUsuarioComponent } from './login/home/colaboradores/editar-usuario/editar-usuario.component';
import { ContentComponent } from './login/home/content/content.component';
import { CadastrarDepartamentoComponent } from './login/home/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { DeletarDepartamentoComponent } from './login/home/departamento/deletar-departamento/deletar-departamento.component';
import { DepartamentoComponent } from './login/home/departamento/departamento.component';
import { EditarDepartamentoComponent } from './login/home/departamento/editar-departamento/editar-departamento.component';
import { CadastrarFonecedorComponent } from './login/home/fornecedores/cadastrar-fonecedor/cadastrar-fonecedor.component';
import { EditarFonecedorComponent } from './login/home/fornecedores/editar-fonecedor/editar-fonecedor.component';
import { FornecedoresComponent } from './login/home/fornecedores/fornecedores.component';
import { HomeComponent } from './login/home/home.component';
import { EntradaComponent } from './login/home/movimentacoes/entrada/entrada.component';
import { InventarioComponent } from './login/home/movimentacoes/inventario/inventario.component';
import { SaidaComponent } from './login/home/movimentacoes/saida/saida.component';
import { CadastrarProdutoComponent } from './login/home/produtos/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './login/home/produtos/editar-produto/editar-produto.component';
import { ProdutosComponent } from './login/home/produtos/produtos.component';
import { FichaProdutoComponent } from './login/home/relatorios/mov-produto/ficha-produto/ficha-produto.component';
import { MovProdutoComponent } from './login/home/relatorios/mov-produto/mov-produto.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '' , component : LoginComponent },
  { path: 'home' , component : HomeComponent, children: [
    { path: '' , component : ContentComponent },
    { path: 'departamentos' , component: DepartamentoComponent },
    { path: 'fornecedores' , component: FornecedoresComponent },
    { path: 'cadastrardepart' , component: CadastrarDepartamentoComponent },
    { path: 'colaboradores' , component: ColaboradoresComponent },
    { path: 'cadastrarusuario', component: CadastrarUsuarioComponent },
    { path: 'editardepart/:id' , component: EditarDepartamentoComponent },
    { path: 'editarusuario/:id' , component: EditarUsuarioComponent },
    { path: 'editarproduto/:id' , component: EditarProdutoComponent },
    { path: 'editarfornecedor/:id' , component: EditarFonecedorComponent },
    { path: 'produtos' , component: ProdutosComponent },
    { path: 'cadastrarproduto' , component: CadastrarProdutoComponent },
    { path: 'cadatrarfornecedor' , component: CadastrarFonecedorComponent },
    {path: 'entradaproduto', component: EntradaComponent},
    {path: 'saidaproduto', component: SaidaComponent},
    {path: 'inventario', component: InventarioComponent },
    {path: 'fichaestoque', component: MovProdutoComponent }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
