import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Interface pour typage des abonnements
export interface Abonnement {
  id_abonnement?: number; // optionnel car créé côté serveur
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
      .pipe(
        catchError(this.handleError)
      );
  }

  // Ajouter un nouvel abonnement
  add(abonnement: Abonnement): Observable<Abonnement> {
    return this.http.post<Abonnement>(this.apiUrl, abonnement)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gestion simple des erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    console.error('Erreur API Abonnement:', error);
    let message = 'Une erreur est survenue, vérifie le serveur et les données.';
    if (error.error && error.error.message) {
      message = error.error.message;
    }
    return throwError(() => new Error(message));
  }
}
