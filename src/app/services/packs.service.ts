import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pack {
  id: number;
  nom: string;
  description?: string;
  prix?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private apiUrl = 'http://localhost:8000/api/packs'; // adapte selon ton API Laravel

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pack[]> {
    return this.http.get<Pack[]>(this.apiUrl);
  }

  getById(id: number): Observable<Pack> {
    return this.http.get<Pack>(`${this.apiUrl}/${id}`);
  }

  create(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(this.apiUrl, pack);
  }

  update(id: number, pack: Pack): Observable<Pack> {
    return this.http.put<Pack>(`${this.apiUrl}/${id}`, pack);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
