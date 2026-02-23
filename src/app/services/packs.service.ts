import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Pack {
  id_pack?: number;
  nom_pack: string;
  prix?: number;
  disponibilite?: string;
  garantie?: string;
  duree_garantie?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private apiUrl = 'http://localhost:8000/api/packs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pack[]> {
    return this.http.get<Pack[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Pack> {
    return this.http.get<Pack>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  create(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(this.apiUrl, pack).pipe(catchError(this.handleError));
  }

  update(id: number, pack: Pack): Observable<Pack> {
    return this.http.put<Pack>(`${this.apiUrl}/${id}`, pack).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erreur API Pack:', error);
    let message = 'Une erreur est survenue, vérifie le serveur et les données.';
    if (error.error?.message) message = error.error.message;
    return throwError(() => new Error(message));
  }
}
