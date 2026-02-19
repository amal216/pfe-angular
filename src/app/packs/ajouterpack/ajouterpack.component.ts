import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackService, Pack } from '../../services/packs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-pack',
  templateUrl: './ajouterpack.component.html',
  styleUrls: ['./ajouterpack.component.scss']
})
export class AjouterPackComponent implements OnInit {

  pack: Pack = { id: 0, nom: '', description: '', prix: 0 };
  isEditing = false;

  constructor(
    private packService: PackService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditing = true;
      this.packService.getById(+id).subscribe({
        next: data => this.pack = data,
        error: err => console.error('Erreur chargement pack', err)
      });
    }
  }

  save(form: NgForm): void {
    if (this.isEditing) {
      this.packService.update(this.pack.id, this.pack).subscribe({
        next: () => this.router.navigate(['/packs']),
        error: err => console.error('Erreur mise à jour pack', err)
      });
    } else {
      this.packService.create(this.pack).subscribe({
        next: () => this.router.navigate(['/packs']),
        error: err => console.error('Erreur création pack', err)
      });
    }
  }
}
