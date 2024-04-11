import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterEtudiantComponent } from './Etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { DetailComponent } from './Etudiants/detail/detail.component';
import { EtudiantComponent } from './Etudiants/etudiants/etudiants.component';
import { UpdateEtudiantComponent } from './Etudiants/update-etudiant/update-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEtudiantComponent,
    DetailComponent,
    EtudiantComponent,
    UpdateEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Importez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
