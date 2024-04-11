import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  etudiant: Etudiant | null;

  constructor(private etudiantService: EtudiantService, private route: ActivatedRoute, private router: Router) { 
    this.etudiant = null;
  }

  ngOnInit(): void {
    this.getEtudiantDetails();
  }

  getEtudiantDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.etudiantService.getEtudiantById(id).subscribe(
      etudiant => {
        this.etudiant = etudiant;
      },
      error => {
        console.error('Une erreur est survenue lors de la récupération des détails de l\'étudiant : ', error);
      }
    );
  }

  updateEtudiant(): void {
    if (this.etudiant) {
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(
        () => {
          // Redirige vers la liste des étudiants après la mise à jour réussie
          this.router.navigate(['/etudiants']);
        },
        error => {
          console.error('Une erreur est survenue lors de la mise à jour de l\'étudiant : ', error);
        }
      );
    } else {
      console.error('Aucun détail d\'étudiant disponible.');
    }
  }
}
