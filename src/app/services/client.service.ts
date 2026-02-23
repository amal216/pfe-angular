import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  cin:string;
  id_client?: number;
  nom: string;
  prenom: string;
  numero?: string;
  email?: string;
  pays?: string;
  ville?: string;
  localisation?: string;
  gerant?: string;
  projet?: string;
  canal_contact?: string;
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

  update(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);

  }
}
