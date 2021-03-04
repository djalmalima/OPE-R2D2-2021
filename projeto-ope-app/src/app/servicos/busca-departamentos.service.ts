import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamentos } from '../_model/Departamentos';

@Injectable({
  providedIn: 'root'
})
export class BuscaDepartamentosService {
  
  private URL_DEPARTAMENTOS = 'http://localhost:8080/departamentos'
  
  
  constructor(private http: HttpClient) { }
  
  getDepartamentos(): Observable<any> {
    return this.http.get(`${this.URL_DEPARTAMENTOS}`);
  }
  
  getDepartamentoById(id: number) : Observable<any>  {
    return this.http.get(`${this.URL_DEPARTAMENTOS}/${id}`)
  }

  postDepartamento(departamento: Departamentos) :  Observable<any>{
    return this.http.post(`${this.URL_DEPARTAMENTOS}`, departamento);
  }

  
}