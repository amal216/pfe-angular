import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConcurrentService } from '../../services/concurrent.service';

@Component({
  selector: 'app-ajouter-concurrent',
  templateUrl: './ajouterconcurrent.component.html',
  styleUrls: ['./ajouterconcurrent.component.scss']
})
export class AjouterConcurrentComponent implements OnInit {

  nouveauConcurrent: any = {
    nom: '',
    secteur: '',
    pays: '',
    ville: '',
    numero: '',
    email: '',
    site_web: '',
    points_forts: '',
    points_faibles: '',
    part_de_marche: '',
    strategie_prix: '',
    strategie_marketing: '',
    remarques: ''
  };
  isEditing: boolean = false;
  concurrentId: number | null = null;

  constructor(
    private concurrentService: ConcurrentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Vérifier si c'est une modification
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.concurrentId = +params['id'];
        this.isEditing = true;
        this.concurrentService.getById(this.concurrentId).subscribe({
          next: data => this.nouveauConcurrent = data,
          error: err => console.error('Erreur chargement concurrent', err)
        });
      }
    });
  }

  ajouterConcurrent() {
    if(this.isEditing && this.concurrentId) {
      this.concurrentService.update(this.concurrentId, this.nouveauConcurrent).subscribe({
        next: () => {
          alert('Concurrent mis à jour ✅');
          this.router.navigate(['/concurrents']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de la mise à jour ❌');
        }
      });
    } else {
      this.concurrentService.add(this.nouveauConcurrent).subscribe({
        next: () => {
          alert('Concurrent ajouté ✅');
          this.router.navigate(['/concurrents']);
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de l’ajout ❌');
        }
      });
    }
  }
}
