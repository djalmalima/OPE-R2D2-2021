import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimentacao } from '../_model/Movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  
  private URL_MOVIMENTACAO = 'http://localhost:8080/movimentacao'  
  
  constructor(private http: HttpClient) { }
     
  getMovimentacaoProdutpById(id: number) : Observable<any>  {
    return this.http.get(`${this.URL_MOVIMENTACAO}/produto/${id}`)
  }

  postMovimentacao(movimentacao: Movimentacao) :  Observable<any>{
    return this.http.post(`${this.URL_MOVIMENTACAO}`, movimentacao);
  }

}
