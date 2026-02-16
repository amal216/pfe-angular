import { Component, OnInit } from '@angular/core';
import { PacksService } from '../services/packs.service';


@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit {

  packs: any[] = [];
  nouveauPack: any = {
    nom_pack: '',
    prix: 0,
    disponibilite: 'en stock',
    garantie: 'oui',
    duree_garantie: '1 an',
    description: ''
  };

  constructor(private packsService: PacksService) {}

  ngOnInit(): void {
    this.loadPacks();
  }

  loadPacks() {
    this.packsService.getPacks().subscribe({
      next: (data: any[]) => { this.packs = data; },
      error: (err: any) => { console.error('Erreur chargement packs', err); }
    });
  }

  ajouterPack() {
    this.packsService.addPack(this.nouveauPack).subscribe({
      next: (data: any) => {
        this.loadPacks();
        this.nouveauPack = {
          nom_pack: '',
          prix: 0,
          disponibilite: 'en stock',
          garantie: 'oui',
          duree_garantie: '1 an',
          description: ''
        };
      },
      error: (err: any) => { console.error('Erreur ajout pack', err); }
    });
  }
}
