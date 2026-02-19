import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicielService {

  private apiUrl = 'http://localhost:8000/api/logiciels'; // URL de ton backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  add(logiciel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, logiciel);
  }

  update(id: number, logiciel: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, logiciel);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
