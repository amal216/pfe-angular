import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Logiciel {
  id_logiciel?: number;
  nom_logiciel: string;
  description?: string;
  categorie: string;
  prix?: number;
  type_licence: string;
  compatibilite: string;
  statut: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogicielService {

  private apiUrl = 'http://localhost:8000/api/logiciels';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Logiciel[]> {
    return this.http.get<Logiciel[]>(this.apiUrl);
  }

  getById(id: number): Observable<Logiciel> {
    return this.http.get<Logiciel>(`${this.apiUrl}/${id}`);
  }

  add(logiciel: Logiciel): Observable<Logiciel> {
    return this.http.post<Logiciel>(this.apiUrl, logiciel);
  }

  update(id: number, logiciel: Logiciel): Observable<Logiciel> {
    return this.http.put<Logiciel>(`${this.apiUrl}/${id}`, logiciel);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
