import { Component, OnInit } from '@angular/core';
import { LogicielService } from '../services/logiciel.service';

@Component({
  selector: 'app-logiciels',
  templateUrl: './logiciels.component.html',
  styleUrls: ['./logiciels.component.scss']
})
export class LogicielsComponent implements OnInit {

  logiciels: any[] = [];
  nouveauLogiciel: any = {
    nom_logiciel: '',
    version: '',
    prix: 0,
    plateforme: '',
    disponibilite: 'en stock',
    description: '',
    garantie: 'oui'
  };

  constructor(private logicielService: LogicielService) {}

  ngOnInit(): void {
    this.loadLogiciels();
  }

  loadLogiciels() {
    this.logicielService.getAll().subscribe({
      next: (data: any[]) => { this.logiciels = data; },
      error: (err: any) => { console.error('Erreur chargement logiciels', err); }
    });
  }

  ajouterLogiciel() {
    this.logicielService.add(this.nouveauLogiciel).subscribe({
      next: (data: any) => {
        this.loadLogiciels(); // recharge la liste
        // Reset formulaire
        this.nouveauLogiciel = {
          nom_logiciel: '',
          version: '',
          prix: 0,
          plateforme: '',
          disponibilite: 'en stock',
          description: '',
          garantie: 'oui'
        };
      },
      error: (err: any) => {
        console.error('Erreur ajout logiciel', err);
      }
    });
  }
}
