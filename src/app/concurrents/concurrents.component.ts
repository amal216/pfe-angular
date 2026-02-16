import { Component, OnInit } from '@angular/core';
import { ConcurrentService } from '../services/concurrent.service';

@Component({
  selector: 'app-concurrents',
  templateUrl: './concurrents.component.html',
  styleUrls: ['./concurrents.component.scss']
})
export class ConcurrentsComponent implements OnInit {

  concurrents: any[] = [];
  nouveauConcurrent: any = {};
  isEditing: boolean = false; // mode édition
  editId: number | null = null; // id du concurrent en cours de modification

  constructor(private concurrentService: ConcurrentService) {}

  ngOnInit(): void {
    this.loadConcurrents();
  }

  // Charger tous les concurrents depuis l'API
  loadConcurrents() {
    this.concurrentService.getAll().subscribe({
      next: (data: any[]) => { this.concurrents = data; },
      error: (err: any) => { console.error('Erreur chargement concurrents', err); }
    });
  }

  // Ajouter ou modifier un concurrent
  ajouterConcurrent() {
    console.log("Ajouter cliqué :", this.nouveauConcurrent);

    if (this.isEditing && this.editId) {
      // modification
      this.concurrentService.update(this.editId, this.nouveauConcurrent).subscribe({
        next: () => {
          this.loadConcurrents();
          this.nouveauConcurrent = {};
          this.isEditing = false;
          this.editId = null;
        },
        error: (err: any) => {
          console.error('Erreur modification concurrent', err);
          alert('Erreur modification : ' + JSON.stringify(err.error));
        }
      });
    } else {
      // ajout
      this.concurrentService.add(this.nouveauConcurrent).subscribe({
        next: () => {
          this.loadConcurrents();
          this.nouveauConcurrent = {};
        },
        error: (err: any) => {
          console.error('Erreur ajout concurrent', err);
          alert('Erreur ajout : ' + JSON.stringify(err.error));
        }
      });
    }
  }

  // Préparer le formulaire pour modifier un concurrent
  modifierConcurrent(concurrent: any) {
    this.nouveauConcurrent = { ...concurrent };
    this.isEditing = true;
    this.editId = concurrent.id_concurrent;
  }

  // Supprimer un concurrent
  supprimerConcurrent(id: number) {
    if (!confirm('Voulez-vous vraiment supprimer ce concurrent ?')) return;
    this.concurrentService.delete(id).subscribe({
      next: () => this.loadConcurrents(),
      error: (err: any) => console.error('Erreur suppression concurrent', err)
    });
  }
}
