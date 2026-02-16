import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService, Client } from '../services/client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent {
  nouveauClient: Client = {
    nom: '',
    prenom: '',
    numero: '',
    email: '',
    pays: '',
    ville: '',
    localisation: '',
    projet: '',
    canal_contact: '',
    gerant: '',
    statut: 'actif'
  };

  paysList: string[] = ['Tunisie', 'France', 'Maroc', 'Algérie'];

  constructor(private clientService: ClientService, private router: Router) {}

  ajouterClient() {
    if (!this.nouveauClient.nom || !this.nouveauClient.pays) {
      alert("Veuillez remplir les champs obligatoires !");
      return;
    }

    this.clientService.add(this.nouveauClient).subscribe({
      next: () => {
        alert('Client ajouté avec succès ✅');
        this.router.navigate(['/clients']);
      },
      error: () => alert("Erreur lors de l'ajout du client ❌")
    });
  }
}
