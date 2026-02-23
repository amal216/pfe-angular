import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisClientService {

  private apiUrl = 'http://127.0.0.1:8000/api/avis-clients';

  constructor(private http: HttpClient) {}

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
