import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './Etudiants/etudiants/etudiants.component';
import { AjouterEtudiantComponent } from './Etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { UpdateEtudiantComponent } from './Etudiants/update-etudiant/update-etudiant.component';
import { DetailComponent } from './Etudiants/detail/detail.component';

const routes: Routes = [
  { path: "", component: EtudiantComponent },
  { path: "Ajouter", component: AjouterEtudiantComponent }, 
  { path: "Update/:idEtudiant/:nomEt/:prenomEt/:cin/:ecole/:dateNaissance/:email", component: UpdateEtudiantComponent }, 
  { path: "detail/:idEtudiant/:nomEt/:prenomEt/:cin/:ecole/:dateNaissance/:email", component: DetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
