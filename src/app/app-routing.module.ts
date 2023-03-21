import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { DpacComponent } from './pages/sobre/dpac/dpac.component';
import { CadProfissionalComponent } from './pages/profissional/cad-profissional/cad-profissional.component';
import { CadPacienteComponent} from './pages/paciente/cad-paciente/cad-paciente.component';
import { CadClinicaComponent } from './pages/clinica/cad-clinica/cad-clinica.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobreDpac', component: DpacComponent },
  { path: 'profissional/cadastrar', component: CadProfissionalComponent },
  { path: 'paciente/cadastrar', component:CadPacienteComponent},
  { path: 'clinica/cadastrar', component:CadClinicaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
