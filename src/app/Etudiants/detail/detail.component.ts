import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EtudiantService } from "src/app/etudiant.service";
import { Etudiant } from "src/app/models/Etudiant";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  etudiant: Etudiant = new Etudiant(); // Initialiser un nouvel objet Etudiant

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Utiliser les paramètres de l'URL pour initialiser l'objet etudiant
      this.etudiant = {
        idEtudiant: +params['idEtudiant'],
        nomEt: params['nomEt'],
        prenomEt: params['prenomEt'],
        cin: +params['cin'],
        ecole: params['ecole'],
        dateNaissance: new Date(params['dateNaissance']),
        email: params['email']
      };
    });
  }

  ModifierFoyer() {
    this.etudiantService.ModifierFoyer(this.etudiant).subscribe(
      (res: Etudiant) => {
        localStorage.clear();
        this.router.navigate(['']);
        console.log('Étudiant modifié avec succès:', res);
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'étudiant:', error);
      }
    );
  } 
}
