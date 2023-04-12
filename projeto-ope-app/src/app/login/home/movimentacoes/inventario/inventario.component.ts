import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { MovimentacaoService } from 'src/app/servicos/movimentacao.service';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';
import { Movimentacao } from 'src/app/_model/Movimentacao';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  
  listaProduto : Produto[] = []
  carregarCrud = false;


  formulario = new FormGroup({    
    produtos: new FormArray([])   
  })

  constructor(private fb : FormBuilder,
    private produtoServico: ProdutoService,
    private movimentacaoService: MovimentacaoService,
    private router : Router,   
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.adicionarProduto();
  }
  
  get produtos(): FormArray {
    return this.formulario.get('produtos') as FormArray;
  }

  removeServico(index: number): void{
    this.produtos.removeAt(index);  
  }


  adicionarProduto(): void{
    if (this.produtos.valid === false){
      this.toastr.warning("Não é possivel adicionar produto, até que todos produtos não sejam preenchidos.","Entrada de Produtos")
    }
    else{
      const produto = this.fb.group({
        produtoNome: new FormControl("", Validators.required),
        produtoId: new FormControl("", Validators.required),
        quantidade: new FormControl("", [Validators.required, Validators.min(1)])
      })
      this.produtos.push(produto)
    } 
  }
  

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Insert'){
      this.adicionarProduto()
    }
  }

 
  atualizaProduto(termo : string, index: number) {
    if (termo.trim() === ''){
      this.listaProduto = []  
      this.produtos.controls[index].get('quantidade')?.setValue("")
    }
    else{
      let listaAuxiliar = []
      this.listaProduto = []
      this.produtoServico.getProdutos().subscribe(        
        (resposta) => {listaAuxiliar = resposta,
          listaAuxiliar.forEach((produto: Produto) => {            
            if (produto.descricao.toLowerCase().includes(termo.toLowerCase()) || produto.id === Number(termo) ){              
              this.listaProduto.push(produto)        
            }
          });        
        }
      )
    }
  }
 

  buscaProduto(produtoEscolhio: Produto, id: number){
    this.produtos.controls[id].get('produtoId')?.setValue(produtoEscolhio.id)
    this.produtos.controls[id].get('produtoNome')?.setValue(produtoEscolhio.descricao)
    this.listaProduto = []
  }

  verificarRepetido(): Boolean{
    let validacao = false
    let listaVazia : number[] = []
    let listaCheia = this.produtos.value
    listaCheia.forEach((element : any) => {
        if(listaVazia.includes(element.produtoId)){
          validacao = true
        }
        else{
          listaVazia.push(element.produtoId)
        }
    });
    return validacao
  }
  
  cadastrar(): void {   

    
    
    if(!this.formulario.valid){
      this.toastr.warning("Todos os campos deve ser preenchidos")
    }
    if(this.verificarRepetido()){
      this.toastr.warning("Tem produtos repetidos, por favor verifique.")
    }  
    else{
      
      let quantidade : number    
      let lista = this.produtos.value   
      
      lista.forEach((produto: any) => {    
        this.produtoServico.getProdutoById(produto.produtoId).subscribe(
          
          (resposta) => {quantidade = resposta.quantidade;
              
              let movimentacao = new Movimentacao(999999, produto.produtoId, new Date(), "Inventário" ,(produto.quantidade ))
              this.movimentacaoService.postMovimentacao(movimentacao).subscribe( );                
           
          }    
        );    
      }); 
      this.carregarCrud = true; 
      setTimeout(() => {        
        if(this.formulario.valid){                   
          setTimeout(() => {
            this.toastr.success("Movimentação de inventário realizada com sucesso"),
            this.router.navigate(['/home', 'produtos'])          
          }, 2000);        
        }
      }, 500);



    }


    
  } 

}
