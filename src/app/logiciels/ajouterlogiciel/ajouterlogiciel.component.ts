import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicielService } from '../../services/logiciel.service';

@Component({
  selector: 'app-ajouter-logiciel',
  templateUrl: './ajouterlogiciel.component.html',
  styleUrls: ['./ajouterlogiciel.component.scss']
})
export class AjouterLogicielComponent implements OnInit {

  nouveauLogiciel: any = {
    nom_logiciel: '',
    version: '',
    prix: 0,
    plateforme: '',
    disponibilite: 'en stock',
    description: '',
    garantie: 'oui'
  };
  isEditing: boolean = false;
  logicielId: number | null = null;

  constructor(
    private logicielService: LogicielService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.logicielId = +params['id'];
        this.isEditing = true;
        this.logicielService.getById(this.logicielId).subscribe({
          next: data => this.nouveauLogiciel = data,
          error: err => console.error('Erreur chargement logiciel', err)
        });
      }
    });
  }

  ajouterLogiciel() {
    if (this.isEditing && this.logicielId) {
      this.logicielService.update(this.logicielId, this.nouveauLogiciel).subscribe({
        next: () => {
          alert('Logiciel mis à jour ✅');
          this.router.navigate(['/logiciels']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de la mise à jour ❌');
        }
      });
    } else {
      this.logicielService.add(this.nouveauLogiciel).subscribe({
        next: () => {
          alert('Logiciel ajouté ✅');
          this.router.navigate(['/logiciels']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de l’ajout ❌');
        }
      });
    }
  }
}
