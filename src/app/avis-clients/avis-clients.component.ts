import { Component, OnInit } from '@angular/core';
import { AvisClientService } from '../services/avis-client.service';

@Component({
  selector: 'app-avis-clients',
  templateUrl: './avis-clients.component.html',
  styleUrls: ['./avis-clients.component.scss']
})
export class AvisClientComponent implements OnInit {

  avisClients: any[] = [];

  constructor(private avisClientService: AvisClientService) {}

  ngOnInit(): void {
    this.loadAvisClients();
  }

  loadAvisClients() {
    this.avisClientService.getAll().subscribe({
      next: (data) => this.avisClients = data,
      error: (err) => console.error('Erreur chargement avis clients', err)
    });
  }

}
