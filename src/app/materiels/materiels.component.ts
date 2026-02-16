import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../services/materiel.service';

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.scss']
})
export class MaterielsComponent implements OnInit {

  materiels: any[] = [];
  nouveauMateriel: any = {
    nom_materiel: '',
    categorie: '',
    prix: 0,
    disponibilite: 'en stock',
    garantie: 'oui',
    duree_garantie: '1 an',
    gamme: 'excellente',
    description: ''
  };
  editMode: boolean = false;
  editId: number | null = null;

  constructor(private materielService: MaterielService) { }

  ngOnInit(): void {
    this.loadMateriels();
  }

  loadMateriels() {
    this.materielService.getAll().subscribe({
      next: (data: any[]) => this.materiels = data,
      error: (err) => console.error('Erreur chargement materiels', err)
    });
  }

  ajouterMateriel() {
    if (this.editMode && this.editId !== null) {
      this.materielService.update(this.editId, this.nouveauMateriel).subscribe({
        next: () => {
          this.loadMateriels();
          this.resetForm();
        },
        error: (err) => console.error('Erreur modification materiel', err)
      });
    } else {
      this.materielService.add(this.nouveauMateriel).subscribe({
        next: () => {
          this.loadMateriels();
          this.resetForm();
        },
        error: (err) => console.error('Erreur ajout materiel', err)
      });
    }
  }

  editMateriel(materiel: any) {
    this.editMode = true;
    this.editId = materiel.id_materiel;
    this.nouveauMateriel = { ...materiel };
  }

  deleteMateriel(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce matériel ?')) {
      this.materielService.delete(id).subscribe({
        next: () => this.loadMateriels(),
        error: (err) => console.error('Erreur suppression materiel', err)
      });
    }
  }

  resetForm() {
    this.nouveauMateriel = {
      nom_materiel: '',
      categorie: '',
      prix: 0,
      disponibilite: 'en stock',
      garantie: 'oui',
      duree_garantie: '1 an',
      gamme: 'excellente',
      description: ''
    };
    this.editMode = false;
    this.editId = null;
  }
}
