import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AvisClient {
  id?: number;
  id_client: number;
  projet?: string;
  date_appel?: string;
  note_globale?: number;
  note_service?: number;
  commentaire?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvisClientService {

  private apiUrl = 'http://localhost:8000/api/avis-clients';

  constructor(private http: HttpClient) { }

  getAll(): Observable<AvisClient[]> {
    return this.http.get<AvisClient[]>(this.apiUrl);
  }

  add(avis: AvisClient): Observable<AvisClient> {
    return this.http.post<AvisClient>(this.apiUrl, avis);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: number, avis: AvisClient): Observable<AvisClient> {
    return this.http.put<AvisClient>(`${this.apiUrl}/${id}`, avis);
  }
}
