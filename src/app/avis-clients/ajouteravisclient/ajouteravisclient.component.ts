import { Component } from '@angular/core';
import { AvisClientService } from '../../services/avis-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouteravisclient',
  templateUrl: './ajouteravisclient.component.html',
  styleUrls: ['./ajouteravisclient.component.scss']
})
export class AjouterAvisClientComponent {

  nouvelAvis: any = this.getEmptyAvis();

  noteFields = [
    { label: 'Note Globale', model: 'note_globale' },
    { label: 'Note Service', model: 'note_service' },
    { label: 'Note Qualité', model: 'note_qualite' },
    { label: 'Note Prix', model: 'note_prix' },
    { label: 'Note Livraison', model: 'note_livraison' },
    { label: 'Note Facilité Utilisation', model: 'note_facilite_utilisation' },
    { label: 'Note Service Après Vente', model: 'note_service_apres_vente' }
  ];

  constructor(
    private avisClientService: AvisClientService,
    private router: Router
  ) {}

  ajouterAvis() {
    if (!this.nouvelAvis.id_client) {
      alert('ID Client requis');
      return;
    }

    this.avisClientService.add(this.nouvelAvis).subscribe({
      next: () => {
        alert('Avis ajouté avec succès');
        this.router.navigate(['/avis-clients']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’ajout');
      }
    });
  }

  getEmptyAvis() {
    return {
      id_client: null,
      id_service_collecte: null,
      projet: '',
      date_appel: '',
      note_globale: null,
      note_service: null,
      note_qualite: null,
      note_prix: null,
      note_livraison: null,
      note_facilite_utilisation: null,
      note_service_apres_vente: null,
      canal_collecte: '',
      point_positif: '',
      point_negatif: '',
      suggestion_amelioration: '',
      type_produit: '',
      nom_produit: '',
      recommande: null,
      niveau_satisfaction: null,
      incident: '',
      niveau_urgence: null,
      date_traitement: '',
      commentaire: ''
    };
  }
}
