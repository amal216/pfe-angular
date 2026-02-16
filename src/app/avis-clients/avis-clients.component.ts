import { Component, OnInit } from '@angular/core';
import { AvisClientService } from '../services/avis-client.service';

@Component({
  selector: 'app-avis-clients',
  templateUrl: './avis-clients.component.html'
})
export class AvisClientsComponent implements OnInit {

  avisClients: any[] = [];
  nouvelAvis: any = {};

  constructor(private avisService: AvisClientService) {}

  ngOnInit(): void {
    this.loadAvisClients();
  }

  loadAvisClients() {
    this.avisService.getAll().subscribe({
      next: (data) => this.avisClients = data,
      error: (err) => console.error('Erreur chargement avis', err)
    });
  }

  ajouterAvis() {
    this.avisService.add(this.nouvelAvis).subscribe({
      next: () => {
        this.loadAvisClients();
        this.nouvelAvis = {};
      },
      error: (err) => console.error('Erreur ajout avis', err)
    });
  }
}
