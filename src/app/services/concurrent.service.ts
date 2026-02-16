import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConcurrentService {

  private apiUrl = `${environment.apiUrl}/concurrents`; // URL de ton API Laravel

  constructor(private http: HttpClient) { }

  // Récupérer tous les concurrents
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un nouveau concurrent
  add(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Modifier un concurrent existant
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // Supprimer un concurrent
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Récupérer un concurrent par ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
