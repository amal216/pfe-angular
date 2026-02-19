import { Component } from '@angular/core';
import { AbonnementService } from '../../services/abonnement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterabonnement',
  templateUrl: './ajouterabonnement.component.html',
  styleUrls: ['./ajouterabonnement.component.scss']
})
export class AjouterAbonnementComponent {

  nouvelAbonnement: any = {
    nom_abonnement: '',
    id_logiciel: null,
    prix: null,
    commentaire: ''
  };

  constructor(
    private abonnementService: AbonnementService,
    private router: Router
  ) {}

  ajouterAbonnement() {
    if (!this.nouvelAbonnement.id_logiciel) {
      alert('ID Logiciel est requis et doit être un nombre');
      return;
    }

    this.abonnementService.add(this.nouvelAbonnement).subscribe({
      next: (data) => {
        alert('Abonnement ajouté avec succès ✅');
        this.router.navigate(['/abonnements']);
      },
      error: (err) => {
        console.error('Erreur ajout abonnement', err);
        const msg = err.error?.message || 'Vérifie les champs et le serveur';
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

export class AjouterabonnementComponent {
}
