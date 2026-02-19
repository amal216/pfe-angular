import { Component } from '@angular/core';
import { AvisClientService } from '../../services/avis-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouteravisclient',
  templateUrl: './ajouteravisclient.component.html',
  styleUrls: ['./ajouteravisclient.component.scss']
})


export class AjouterAvisClientComponent {

  nouvelAvis: any = {
    id_client: null,
    projet: '',
    date_appel: '',
    note_globale: null,
    note_service: null,
    commentaire: ''
  };

  constructor(
    private avisClientService: AvisClientService,
    private router: Router
  ) {}

  ajouterAvis() {
    if (!this.nouvelAvis.id_client) {
      alert('ID Client est requis et doit être un nombre');
      return;
    }

    this.avisClientService.add(this.nouvelAvis).subscribe({
      next: () => {
        alert('Avis ajouté avec succès ');
        this.router.navigate(['/avis-client']);
      },
      error: (err) => {
        console.error('Erreur ajout avis', err);
        const msg = err.error?.message || 'Vérifie les champs et le serveur';
        alert('Erreur lors de l’ajout  : ' + msg);
      }
    });
  }

  resetForm() {
    this.nouvelAvis = {
      id_client: null,
      projet: '',
      date_appel: '',
      note_globale: null,
      note_service: null,
      commentaire: ''
    };
  }

}
