import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { MovimentacaoService } from 'src/app/servicos/movimentacao.service';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';
import { Movimentacao } from 'src/app/_model/Movimentacao';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-ficha-produto',
  templateUrl: './ficha-produto.component.html',
  styleUrls: ['./ficha-produto.component.css']
})
export class FichaProdutoComponent{

  @Input() idProduto : number = 0  
  
  produto= new Produto('','','','','','','')
  listaMovimentacao : Movimentacao[] = []
  listaFornecedor : Fornecedor[] = []
  control = 0

  constructor(
      private produtoService: ProdutoService,
      private movimentacaoService : MovimentacaoService,
      private fornecedorService: FornecedorService
    ) { }
 
    ngOnInit(): void {
      this.atualizaFornecedores() 
     
    }


    atualizaFornecedores(){
      this.fornecedorService.getFornecedores().subscribe(
        (resposta) => this.listaFornecedor = resposta
      )  
    }

  ngOnChanges(): void{  

    if ( this.idProduto != 0){
      this.produtoService.getProdutoById(this.idProduto).subscribe(
        (resposta) => { this.produto = resposta }
      )
      this.movimentacaoService.getMovimentacaoProdutpById(this.idProduto).subscribe(
        (resposta) => { this.listaMovimentacao = resposta}
        )
    }      
  }

  atualizaFornecedorNome(id : number){
    if(id == 999999){
      return "Inventário"
    }
    if(id != 0){   
      return this.listaFornecedor[id-1].nome
    }
    return "Saida" 
  }
 
    

}
