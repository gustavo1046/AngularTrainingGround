import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFormularioLogin } from 'src/app/Interfaces/FormularioLogin/IFormularioLogin';
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class FormualrioServiceService {
  constructor(private HttpClient: HttpClient) {}
  API_PATH:string = 'http://localhost:3000/';

  ObterDados(): Observable<any>{
    // console.log(`${this.API_PATH}Usuarios`)
    return this.HttpClient.get<IFormularioLogin[]>(`${this.API_PATH}Usuarios`);
  }

  CadastrarUsuario(formulario: IFormularioLogin){
    formulario.id = Date.now(); // Use um valor único, como o timestamp atual
    return this.HttpClient.post<IFormularioLogin>(`${this.API_PATH}Usuarios`, formulario);
  }

  Login(email: string, senha: string){
    const arquivo = this.HttpClient.get<IFormularioLogin[]>((`${this.API_PATH}Usuarios`)).subscribe(
    );

    // return this.HttpClient.get<boolean>(`${this.API_PATH}Usuarios`);
  }
}
