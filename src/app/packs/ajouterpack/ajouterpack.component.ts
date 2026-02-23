import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackService, Pack } from '../../services/packs.service';

  @Component({
    selector: 'app-ajouter-pack',
    templateUrl: './ajouterpack.component.html',
    styleUrls: ['./ajouterpack.component.scss']
  })
export class AjouterPackComponent implements OnInit {

  pack: Pack = {
    id_pack: 0,
    nom_pack: '',
    prix: 0,
    disponibilite: 'en stock',
    garantie: 'oui',
    duree_garantie: '1 an',
    description: ''
  };

  isEditing = false;

  constructor(
    private packService: PackService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditing = true;
      this.packService.getById(+id).subscribe({
        next: data => this.pack = data,
        error: err => console.error('Erreur chargement pack', err)
      });
    }
  }

  save(): void {
    if (this.isEditing) {
      // id_pack est sûr maintenant grâce à l'initialisation
      this.packService.update(this.pack.id_pack!, this.pack).subscribe({
        next: () => {
          alert('Pack modifiée ');
          this.router.navigate(['/packs']);
        },
        error: err => {
          console.error('Erreur de modificatio pack', err);
          alert('Erreur de modification');
        }
      });
    } else {
      this.packService.create(this.pack).subscribe({
        next: () => {
          alert('Pack ajouté ');
          this.router.navigate(['/packs']);
        },
        error: err => {
          console.error('Erreur création pack', err);
          alert('Erreur création ');
        }
      });
    }
  }
}
