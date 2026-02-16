import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  private apiUrl = 'http://localhost:8000/api/packs'; // URL de ton API Laravel

  constructor(private http: HttpClient) { }

  getPacks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPack(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
