import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getAllEtudiants();
  }

  getAllEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe((data: Etudiant[]) => {
      this.etudiants = data;
    });
  }

  deleteEtudiant(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
      this.etudiantService.deleteEtudiants(id).subscribe(() => {
        alert('Suppression effectuée avec succès');
        this.getAllEtudiants(); // Recharger la liste des étudiants après la suppression
      });
    }
  }
}
