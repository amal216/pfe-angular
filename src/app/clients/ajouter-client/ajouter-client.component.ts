import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterclientComponent {

  nouveauClient: any = {
    nom: '',
    prenom: '',
    pays: '',
    projet: '',
    statut: ''
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ajouterClient() {
    this.clientService.add(this.nouveauClient).subscribe({
      next: () => {
        alert('Client ajouté avec succès ✅');
        this.router.navigate(['/clients']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’ajout ❌');
      }
    });
  }
}
