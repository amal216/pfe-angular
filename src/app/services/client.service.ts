import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id_client?: number;
  nom: string;
  prenom?: string;
  numero?: string;
  email?: string;
  pays: string;
  ville?: string;
  localisation?: string;
  projet?: string;
  canal_contact?: string;
  gerant?: string;
  statut?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8000/api/clients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  add(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }
}
