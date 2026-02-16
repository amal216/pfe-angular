import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AbonnementService {

  private api = environment.apiUrl + '/abonnements';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  add(abonnement: any): Observable<any> {
    return this.http.post<any>(this.api, abonnement);
  }
}
