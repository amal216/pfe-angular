import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterclientComponent implements OnInit {

  nouveauClient: any = this.resetClient();
  idClient: number | null = null;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idClient = params['id'] ? +params['id'] : null;

      if (this.idClient) {
        // MODE MODIFICATION
        this.clientService.getById(this.idClient).subscribe({
          next: (data) => this.nouveauClient = data,
          error: (err) => {
            console.error(err);
            alert('Erreur chargement client ');
          }
        });
      } else {
        // MODE AJOUT
        this.nouveauClient = this.resetClient();
      }
    });
  }

  ajouterClient() {
    if (this.idClient) {
      // Modifier
      this.clientService.update(this.idClient, this.nouveauClient).subscribe({
        next: () => {
          alert('Client modifié ');
          this.router.navigate(['/clients']);
        },
        error: (err) => {
          console.error(err);
          alert('Erreur modification ');
        }
      });
    } else {
      // Ajouter
      this.clientService.add(this.nouveauClient).subscribe({
        next: () => {
          alert('Client ajouté ');
          this.router.navigate(['/clients']);
        },
        error: (err) => {
          console.error(err);
          alert('Erreur ajout ');
        }
      });
    }
  }

  resetClient() {
    return {
      cin:'',
      nom: '',
      prenom: '',
      numero: '',
      email: '',
      pays: 'Tunisie',            // valeur par défaut
      ville: '',
      localisation: '',
      gerant: '',
      projet: '',
      canal_contact: 'telephone',  // valeur par défaut en minuscules
      statut: 'actif'              // valeur par défaut en minuscules
    };
  }
}
