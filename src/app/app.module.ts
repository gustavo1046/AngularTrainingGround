import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './components/formularioLogin/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrinpalpageComponent } from './pages/prinpalpage/prinpalpage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'telaPrincipal', component : PrinpalpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormularioLoginComponent,
    NavbarComponent,
    FormularioCadastroComponent,
    PrinpalpageComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
