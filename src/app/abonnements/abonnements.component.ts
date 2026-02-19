import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../services/abonnement.service';

@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.scss']
})
export class AbonnementsComponent implements OnInit {

  abonnements: any[] = [];

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

}
