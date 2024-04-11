import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  minDate: string = '1900-01-01';
  etudiant: Etudiant = {
    idEtudiant: 0,
    nomEt: '',
    prenomEt: '',
    cin: 0,
    ecole: '',
    dateNaissance: new Date(),
    email: ''
  };

  constructor(private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {}

  saveEtudiant() {
    this.etudiantService.createEmployee(this.etudiant).subscribe(data => {
      this.router.navigate(['']); // Naviguer vers la page d'accueil après l'ajout
      console.log(data);
    });
  }

  onSubmit(etudiantForm: NgForm) {
    if (etudiantForm.valid) {
      this.saveEtudiant();
    }
  }

  validateEmailFormat(control: FormControl) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }
}
