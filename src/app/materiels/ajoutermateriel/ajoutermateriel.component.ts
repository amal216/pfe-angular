import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterielService, Materiel } from '../../services/materiel.service';

@Component({
  selector: 'app-ajouter-materiel',
  templateUrl: './ajoutermateriel.component.html',
  styleUrls: ['./ajoutermateriel.component.scss']
})
export class AjouterMaterielComponent implements OnInit {

  nouveauMateriel: Materiel = this.resetMateriel();
  materielId: number | null = null;
  editMode: boolean = false;

  constructor(
    private materielService: MaterielService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'] ? +params['id'] : null;
      console.log('ID reçu:', id);

      if (id) {
        this.materielId = id;
        this.editMode = true;

        this.materielService.getById(id).subscribe({
          next: (data: Materiel) => {
            console.log('Materiel reçu:', data);
            this.nouveauMateriel = { ...data }; // remplissage complet du formulaire
          },
          error: err => {
            console.error('Erreur chargement matériel', err);
            alert('Erreur chargement matériel ');
          }
        });
      } else {
        this.resetForm();
      }
    });
  }

  ajouterMateriel() {
    if (this.editMode && this.materielId) {
      // MODIFICATION
      this.materielService.update(this.materielId, this.nouveauMateriel).subscribe({
        next: () => {
          alert('Matériel modifié ');
          this.router.navigate(['/materiels']);
        },
        error: err => {
          console.error(err);
          alert('Erreur modification ');
        }
      });
    } else {
      // AJOUT
      this.materielService.add(this.nouveauMateriel).subscribe({
        next: () => {
          alert('Matériel ajouté ');
          this.router.navigate(['/materiels']);
        },
        error: err => {
          console.error(err);
          alert('Erreur ajout ');
        }
      });
    }
  }

  resetForm() {
    this.nouveauMateriel = this.resetMateriel();
    this.materielId = null;
    this.editMode = false;
  }

  resetMateriel(): Materiel {
    return {
      nom_materiel: '',
      categorie: '',
      prix: 0,
      disponibilite: 'en stock',
      garantie: 'oui',
      duree_garantie: '1 an',
      gamme: 'excellente',
      description: ''
    };
  }
}
