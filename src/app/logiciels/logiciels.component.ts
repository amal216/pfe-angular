import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogicielService } from '../services/logiciel.service';

@Component({
  selector: 'app-logiciels',
  templateUrl: './logiciels.component.html',
  styleUrls: ['./logiciels.component.scss']
})
export class LogicielsComponent implements OnInit {

  logiciels: any[] = [];

  constructor(
    private logicielService: LogicielService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLogiciels();
  }

  loadLogiciels() {
    this.logicielService.getAll().subscribe({
      next: data => this.logiciels = data,
      error: err => console.error('Erreur chargement logiciels', err)
    });
  }

  modifierLogiciel(id: number) {
    this.router.navigate(['/logiciels/ajouter', id]);
  }

  supprimerLogiciel(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce logiciel ?')) {
      this.logicielService.delete(id).subscribe({
        next: () => this.loadLogiciels(),
        error: err => console.error('Erreur suppression logiciel', err)
      });
    }
  }
}
