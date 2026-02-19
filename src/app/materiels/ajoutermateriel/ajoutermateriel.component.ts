import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterielService } from '../../services/materiel.service';

@Component({
  selector: 'app-ajouter-materiel',
  templateUrl: './ajoutermateriel.component.html',
  styleUrls: ['./ajoutermateriel.component.scss']
})
export class AjouterMaterielComponent implements OnInit {

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
  materielId: number | null = null;

  constructor(
    private materielService: MaterielService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.materielId = +params['id'];
        this.editMode = true;
        this.materielService.getById(this.materielId).subscribe({
          next: data => this.nouveauMateriel = data,
          error: err => console.error('Erreur chargement matériel', err)
        });
      }
    });
  }

  ajouterMateriel() {
    if (this.editMode && this.materielId) {
      this.materielService.update(this.materielId, this.nouveauMateriel).subscribe({
        next: () => {
          alert('Matériel mis à jour ✅');
          this.router.navigate(['/materiels']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de la mise à jour ❌');
        }
      });
    } else {
      this.materielService.add(this.nouveauMateriel).subscribe({
        next: () => {
          alert('Matériel ajouté ✅');
          this.router.navigate(['/materiels']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de l’ajout ❌');
        }
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
    this.materielId = null;
  }
}
