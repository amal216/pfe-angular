import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Abonnement {
  id_abonnement?: number; // optionnel côté serveur
  nom_abonnement: string;
  id_logiciel: number;
  prix?: number;
  commentaire?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  private apiUrl = 'http://localhost:8000/api/abonnements'; // adapte selon ton API

  constructor(private http: HttpClient) { }

  // Récupérer tous les abonnements
  getAll(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Récupérer un abonnement par ID
  getById(id: number): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Ajouter un nouvel abonnement
  add(abonnement: Abonnement): Observable<Abonnement> {
    return this.http.post<Abonnement>(this.apiUrl, abonnement)
      .pipe(catchError(this.handleError));
  }

  // Mettre à jour un abonnement existant
  update(id: number, abonnement: Abonnement): Observable<Abonnement> {
    return this.http.put<Abonnement>(`${this.apiUrl}/${id}`, abonnement)
      .pipe(catchError(this.handleError));
  }

  // Supprimer un abonnement
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse) {
    console.error('Erreur API Abonnement:', error);
    let message = 'Une erreur est survenue, vérifie le serveur et les données.';
    if (error.error && error.error.message) {
      message = error.error.message;
    }
    return throwError(() => new Error(message));
  }
}
