import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  list:  Colaborador[] = []
  usuarioId: number = 1

  constructor(
    private consulta : BuscaUsuarariosService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.consulta.getUsuarios().subscribe(
      (res) => {this.list = res }
    );    
  }
  
  passarId(usuarioId: any){
    this.usuarioId = usuarioId
  }




  cadastrarColaborador(){
    this.router.navigate(['home', 'cadastrarusuario'])
  }

  retornoAtivo(s : boolean):  String{
    if (s === true) {
      return "Ativo";
    }
    return "Desativado";
  }

}
