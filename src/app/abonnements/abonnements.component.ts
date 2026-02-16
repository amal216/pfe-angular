import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../services/abonnement.service';

@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.scss']
})
export class AbonnementsComponent implements OnInit {

  abonnements: any[] = [];

  nouvelAbonnement: any = {
    nom_abonnement: '',
    id_logiciel: null,
    prix: null,
    commentaire: ''
  };

  constructor(private abonnementService: AbonnementService) {}

  ngOnInit(): void {
    this.loadAbonnements();
  }

  loadAbonnements() {
    this.abonnementService.getAll().subscribe({
      next: (data) => this.abonnements = data,
      error: (err) => console.error('Erreur chargement abonnements', err)
    });
  }

  ajouterAbonnement() {
    // Vérifie que id_logiciel est un nombre
    if (!this.nouvelAbonnement.id_logiciel) {
      alert('ID Logiciel est requis et doit être un nombre');
      return;
    }

    this.abonnementService.add(this.nouvelAbonnement).subscribe({
      next: (data) => {
        alert('Abonnement ajouté avec succès ✅');
        this.loadAbonnements();
        this.resetForm();
      },
      error: (err) => {
        console.error('Erreur ajout abonnement', err);
        let msg = err.error?.message || 'Vérifie les champs et le serveur';
        alert('Erreur lors de l’ajout ❌ : ' + msg);
      }
    });
  }

  resetForm() {
    this.nouvelAbonnement = {
      nom_abonnement: '',
      id_logiciel: null,
      prix: null,
      commentaire: ''
    };
  }
}
