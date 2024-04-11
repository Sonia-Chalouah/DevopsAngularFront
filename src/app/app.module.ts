import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterEtudiantComponent } from './Etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { EtudiantComponent } from './Etudiants/etudiants/etudiants.component';
import { UpdateEtudiantComponent } from './Etudiants/update-etudiant/update-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEtudiantComponent,
    EtudiantComponent,
    UpdateEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Importez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
