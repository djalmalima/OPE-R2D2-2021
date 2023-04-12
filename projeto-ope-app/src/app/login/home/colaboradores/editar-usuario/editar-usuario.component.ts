import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  
  usuario : Colaborador = new Colaborador(false, '', '', '', new Departamentos(''));
  lista: Departamentos[] = []
  id: number = 0
  
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    ativo : new FormControl('', [Validators.required]),
    cargo : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    departamento : new FormControl('', [Validators.required]),
  })
  
  constructor(
    private route: ActivatedRoute,
    private service: BuscaUsuarariosService,
    private serviceDepartamento: BuscaDepartamentosService,
    private router : Router,
    private toastr : ToastrService
    ) { }
    
    ngOnInit(): void {
      let depart : Departamentos;
      
      this.route.params.subscribe((parametrs: Params) => {

        this.service.getUsuarioById(parametrs.id).subscribe(
          (resposta) => { this.usuario = resposta, console.log(resposta),
            this.serviceDepartamento.getDepartamentoById(resposta.departamento.id).subscribe(
              (resposta) =>  {depart = resposta, 
                this.id = parametrs.id,
                this.formulario.controls.nome.setValue(this.usuario.nome),
                this.formulario.controls.ativo.setValue(this.usuario.ativo),
                this.formulario.controls.cargo.setValue(this.usuario.cargo),
                this.formulario.controls.telefone.setValue(this.usuario.telefone),
                this.formulario.controls.departamento.setValue(depart.id),   
                        
                this.serviceDepartamento.getDepartamentos().subscribe(
                  (resposta) => this.lista = resposta
                  )           
                }
                );
              }           
              )
            })
          }  

          alterarUsuario(): void{
            let depart : Departamentos;
            let colab : Colaborador

        
            this.serviceDepartamento.getDepartamentoById(this.formulario.value.departamento).subscribe(
              (resposta) => { 
                depart = resposta, 
                colab = new Colaborador(
                  this.formulario.value.ativo,
                  this.formulario.value.nome,
                  this.formulario.value.cargo,
                  this.formulario.value.telefone,                  
                  depart)
                  
                  this.service.putUsuario(this.id, colab).subscribe(
                    () => { this.toastr.info('Colaborador editado com sucesso!') ,this.router.navigate(['/home', 'colaboradores']) }
                  );
              }) 
          }

        }
        