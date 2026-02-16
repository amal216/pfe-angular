import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AvisClientService {

  private api = environment.apiUrl + '/avis-clients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  add(avis: any): Observable<any> {
    return this.http.post<any>(this.api, avis);
  }

  update(id: number, avis: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, avis);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
