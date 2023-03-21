import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/home/home.component';
import { CadProfissionalComponent } from './pages/profissional/cad-profissional/cad-profissional.component';
import { CadPacienteComponent } from './pages/paciente/cad-paciente/cad-paciente.component';
import { CadClinicaComponent } from './pages/clinica/cad-clinica/cad-clinica.component';
import { DpacComponent } from './pages/sobre/dpac/dpac.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadProfissionalComponent,
    CadPacienteComponent,
    CadClinicaComponent,
    DpacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
