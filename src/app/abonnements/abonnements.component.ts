import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../services/abonnement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.scss']
})
export class AbonnementsComponent implements OnInit {

  abonnements: any[] = [];

  constructor(private abonnementService: AbonnementService, private router: Router) {}

  ngOnInit(): void {
    this.loadAbonnements();
  }

  loadAbonnements() {
    this.abonnementService.getAll().subscribe({
      next: data => this.abonnements = data,
      error: err => console.error('Erreur chargement abonnements', err)
    });
  }

  modifierAbonnement(id: number) {
    this.router.navigate(['/abonnements/ajouter', id]);
  }

  supprimeAbonnement(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet abonnement ?')) {
      this.abonnementService.delete(id).subscribe({
        next: () => this.loadAbonnements(),
        error: err => console.error('Erreur suppression abonnement', err)
      });
    }
  }
}
