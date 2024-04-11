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

  etudiant: Etudiant = {
    idEtudiant: 0,
    nomEt: '',
    prenomEt: '',
    cin: 0,
    ecole: '',
    dateNaissance: new Date(),
    email: ''
  };

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.etudiant.idEtudiant = +params['idEtudiant'];
      this.etudiant.nomEt = params['nomEt'];
      this.etudiant.prenomEt = params['prenomEt'];
      this.etudiant.cin = +params['cin'];
      this.etudiant.ecole = params['ecole'];
      this.etudiant.dateNaissance = new Date(params['dateNaissance']);
      this.etudiant.email = params['email'];
    });
  }

  ModifierFoyer() {
    this.etudiantService.updateEmployee(this.etudiant).subscribe(
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
