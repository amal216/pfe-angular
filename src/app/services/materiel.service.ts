import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private api = `${environment.apiUrl}/materiels`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  add(materiel: any): Observable<any> {
    return this.http.post<any>(this.api, materiel);
  }

  update(id: number, materiel: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, materiel);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
