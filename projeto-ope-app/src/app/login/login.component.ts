import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  data = new Date();
  senhaInvalida = false;
  
  formulario = new FormGroup({
    usuario : new FormControl('', [Validators.required]),
    senha : new FormControl('', [Validators.required])
  })
  
  constructor(private router : Router,
    private toastr: ToastrService
    ) { }
  
 
  acessar(){
    if( this.formulario.value.nome == 'gerente' ||  this.formulario.value.senha == '123456' ){
      let texto = this.boasVindas(this.data.getHours())
      this.toastr.show("Que a força esteja com você!" , texto.toString())
      
      this.router.navigate(['home'])     
    }
    else{
      this.senhaInvalida = true  
    } 
  }

  boasVindas(hora : number): String{
    if (hora < 12){
      return "Bom dia";
    }
    else if( hora < 18){
      return "Boa tarde"
    }
    else{
      return "Boa noite"
    }
  }
  
  apagouSenha($event: any){
    if($event.target.value.length == 0){
      this.senhaInvalida = false
    }
    
  }
  
}
