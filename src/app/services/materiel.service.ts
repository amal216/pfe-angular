import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Materiel {
  id_materiel?: number;
  nom_materiel: string;
  categorie?: string;
  prix?: number;
  disponibilite: string;
  garantie: string;
  duree_garantie: string;
  gamme: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private api = `${environment.apiUrl}/materiels`;

  constructor(private http: HttpClient) { }

  // Récupérer tous les matériels
  getAll(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.api);
  }

  // Récupérer un matériel par ID
  getById(id: number): Observable<Materiel> {
    return this.http.get<Materiel>(`${this.api}/${id}`);
  }

  // Ajouter un nouveau matériel
  add(materiel: Materiel): Observable<Materiel> {
    return this.http.post<Materiel>(this.api, materiel);
  }

  // Mettre à jour un matériel existant
  update(id: number, materiel: Materiel): Observable<Materiel> {
    return this.http.put<Materiel>(`${this.api}/${id}`, materiel);
  }

  // Supprimer un matériel
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
