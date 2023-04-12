import { Component, OnInit, HostListener  } from '@angular/core';
import { FormArray,  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { MovimentacaoService } from 'src/app/servicos/movimentacao.service';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';
import { Movimentacao } from 'src/app/_model/Movimentacao';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {
  tipoMovimentacao = ["Saida por venda", "Devolução de compra", "Bonificação"]
  idFornecedor = 0
  listaFornecedor : Fornecedor[] = []
  listaProduto : Produto[] = []
  carregarCrud = false;

  formulario = new FormGroup({
    fornecedorId : new FormControl("" ),
    tipoMovimentacao: new FormControl("", [Validators.required]),
    produtos: new FormArray([])   
  })

  get produtos(): FormArray {
    return this.formulario.get('produtos') as FormArray;
  }

  constructor(private fb : FormBuilder,
    private fornecedorServico : FornecedorService,
    private produtoServico: ProdutoService,
    private movimentacaoService: MovimentacaoService,
    private router : Router,   
    private toastr : ToastrService
    ) { }  

  ngOnInit(): void {    
    this.adicionarProduto()
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

  atualizarFornecedores(termo : string) {
    if (termo.trim() === ''){
      this.listaFornecedor = []      
    }
    else{
      let listaAuxiliar = []
      this.listaFornecedor = []
      this.fornecedorServico.getFornecedores().subscribe(        
        (resposta) => {listaAuxiliar = resposta,
          listaAuxiliar.forEach((fornecedor: Fornecedor) => {            
            if (fornecedor.nome.toLowerCase().includes(termo.toLowerCase()) || fornecedor.id === Number(termo) ){              
              this.listaFornecedor.push(fornecedor)        
            }
          });        
        }
      )
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

  getFornecedor(fornecedorEscolhido: Fornecedor){    
    this.idFornecedor =  Number(fornecedorEscolhido.id) 
    this.formulario.controls.fornecedorId.setValue(fornecedorEscolhido.nome)
    this.listaFornecedor = []       
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
    
    
    if(!this.verificarRepetido() && this.formulario.valid) {
      
      let quantidade : number    
      let lista = this.produtos.value    
      let controlador = 0;
      let verificador = true
  
      lista.forEach((produto: any) => {    
        this.produtoServico.getProdutoById(produto.produtoId).subscribe(
          
          (resposta) => {quantidade = resposta.quantidade;      
            if( quantidade < produto.quantidade || produto.quantidade == 0){
              verificador = false;
              this.toastr.error("A quantidade do item " + produto.produtoNome + " é maior que o saldo em estoque: " + quantidade)
              stop();
            }
            else{
              controlador++;
              let movimentacao = new Movimentacao(this.idFornecedor, produto.produtoId, new Date(), this.formulario.get('tipoMovimentacao')?.value, (produto.quantidade * -1 ))
              this.movimentacaoService.postMovimentacao(movimentacao).subscribe( );                
            }
          }    
        );    
      }); 
          
      setTimeout(() => {                 
        if(controlador == lista.length && this.formulario.valid && verificador){   
          this.carregarCrud = true;                
          setTimeout(() => {
            this.toastr.success("Movimentação de saida realizada com sucesso"),
            this.router.navigate(['/home', 'produtos'])          
          }, 2000);        
        }
      }, 200);



      


    }


    
  } 


}


