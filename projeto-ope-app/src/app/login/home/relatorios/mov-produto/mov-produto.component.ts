import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-mov-produto',
  templateUrl: './mov-produto.component.html',
  styleUrls: ['./mov-produto.component.css']
})
export class MovProdutoComponent implements OnInit {
  listaProduto: Produto[] = []
  idProduto = 0


   formulario = new FormGroup({    
     produtoNome : new FormControl("")
   })

  constructor(private produtoServico : ProdutoService) { }

  ngOnInit(): void {
  }

  atualizaProduto(termo : string) {
    if (termo.trim() === ''){
      this.idProduto = 0
      this.listaProduto = []
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

  buscaProduto(produtoEscolhio: Produto){    
    this.formulario.get('produtoNome')?.setValue(produtoEscolhio.descricao)
    this.idProduto = Number(produtoEscolhio.id)
    this.listaProduto = []
  }

}
