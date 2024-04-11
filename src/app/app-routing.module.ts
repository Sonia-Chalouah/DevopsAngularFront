import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './Etudiants/etudiants/etudiants.component';
import { AjouterEtudiantComponent } from './Etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { UpdateEtudiantComponent } from './Etudiants/update-etudiant/update-etudiant.component';


const routes: Routes = [
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' }, // Redirige vers /etudiants par défaut
  { path: 'etudiants', component: EtudiantComponent },
  { path: 'ajouter', component: AjouterEtudiantComponent },
  { path: 'update/:idEtudiant', component: UpdateEtudiantComponent },
  { path: '**', redirectTo: '/etudiants'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
