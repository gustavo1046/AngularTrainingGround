import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormualrioServiceService } from 'src/app/services/FormularioLogin/formualrio-service.service';
import { lastValueFrom } from 'rxjs';
import { IFormularioLogin } from 'src/app/Interfaces/FormularioLogin/IFormularioLogin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioLoginComponent{
  FormularioLogin: FormGroup;
  dados:Object = [];

  constructor(private fb: FormBuilder, private FormService: FormualrioServiceService, private router: Router) {
    this.FormularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(){
    // this.CadastrarUsuario();
    this.Login();
  }

  obterDados() {
      // console.log(this.FormService.ObterDados());
    this.LoadUsuarios()
      .then(
        resposta => 
          console.log(resposta)
      )
      .catch(error => console.error(error));
  }

  async CadastrarUsuario(){
    const dadosDoFormulario: IFormularioLogin = this.FormularioLogin.value;
    this.FormService.CadastrarUsuario(dadosDoFormulario).subscribe(
      resposta => {
        console.log('Formulário enviado com sucesso:', resposta);
      },
      erro => {
        console.error('Erro ao enviar formulário:', erro);
      }
    );
  }

  async LoadUsuarios(): Promise<any>{
    const Usuarios$ = this.FormService.ObterDados();
    this.dados = await lastValueFrom(Usuarios$);
    return this.dados
  }

  async Login(){
    const usuario: IFormularioLogin = this.FormularioLogin.value;
    this.FormService.Login(usuario.email, usuario.senha)  
    try{
      this.router.navigate(['./telaPrincipal'])
    }catch (error) {
      console.log("erro ao efetuar login")
    }
  }
}
