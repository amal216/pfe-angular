import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackService, Pack } from '../services/packs.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit {

  packs: Pack[] = [];

  constructor(
    private packService: PackService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPacks();
  }

  loadPacks(): void {
    this.packService.getAll().subscribe({
      next: data => this.packs = data,
      error: err => console.error('Erreur chargement packs', err)
    });
  }

  modifierPack(id: number): void {
    this.router.navigate(['/packs/ajouter', id]);
  }

  supprimerPack(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce pack ?')) {
      this.packService.delete(id).subscribe({
        next: () => this.loadPacks(),
        error: err => console.error('Erreur suppression pack', err)
      });
    }
  }
}
