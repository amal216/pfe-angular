import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcurrentService } from '../services/concurrent.service';

@Component({
  selector: 'app-concurrents',
  templateUrl: './concurrents.component.html',
  styleUrls: ['./concurrents.component.scss']
})
export class ConcurrentsComponent implements OnInit {

  concurrents: any[] = [];

  constructor(
    private concurrentService: ConcurrentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadConcurrents();
  }

  loadConcurrents() {
    this.concurrentService.getAll().subscribe({
      next: data => this.concurrents = data,
      error: err => console.error('Erreur chargement concurrents', err)
    });
  }

  modifierConcurrent(id: number) {
    this.router.navigate(['/concurrents/ajouter', id]);
  }

  supprimerConcurrent(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce concurrent ?')) {
      this.concurrentService.delete(id).subscribe({
        next: () => this.loadConcurrents(),
        error: err => console.error('Erreur suppression concurrent', err)
      });
    }
  }
}
