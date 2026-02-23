import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../../services/abonnement.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouterabonnement',
  templateUrl: './ajouterabonnement.component.html',
  styleUrls: ['./ajouterabonnement.component.scss']
})
export class AjouterAbonnementComponent implements OnInit {

  nouvelAbonnement: any = {
    nom_abonnement: '',
    id_logiciel: null,
    prix: null,
    commentaire: ''
  };

  abonnementId: number | null = null;

  constructor(
    private abonnementService: AbonnementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.abonnementId = +params['id'];
        this.abonnementService.getById(this.abonnementId).subscribe({
          next: data => this.nouvelAbonnement = data,
          error: err => console.error('Erreur chargement abonnement', err)
        });
      }
    });
  }

  ajouterAbonnement() {
    if (!this.nouvelAbonnement.id_logiciel) {
      alert('ID Logiciel est requis et doit être un nombre');
      return;
    }

    if (this.abonnementId) {
      this.abonnementService.update(this.abonnementId, this.nouvelAbonnement).subscribe({
        next: () => {
          alert('Abonnement modifiée');
          this.router.navigate(['/abonnements']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de la modification');
        }
      });
    } else {
      this.abonnementService.add(this.nouvelAbonnement).subscribe({
        next: () => {
          alert('Abonnement ajouté ');
          this.router.navigate(['/abonnements']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de l’ajout ');
        }
      });
    }
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
