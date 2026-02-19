import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielService } from '../services/materiel.service';

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.scss']
})
export class MaterielsComponent implements OnInit {

  materiels: any[] = [];

  constructor(
    private materielService: MaterielService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMateriels();
  }

  loadMateriels() {
    this.materielService.getAll().subscribe({
      next: data => this.materiels = data,
      error: err => console.error('Erreur chargement matériels', err)
    });
  }

  modifierMateriel(id: number) {
    this.router.navigate(['/materiels/ajouter', id]);
  }

  supprimerMateriel(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce matériel ?')) {
      this.materielService.delete(id).subscribe({
        next: () => this.loadMateriels(),
        error: err => console.error('Erreur suppression matériel', err)
      });
    }
  }
}
