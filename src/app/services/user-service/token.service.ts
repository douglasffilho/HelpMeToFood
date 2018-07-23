import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private api = environment.oauth_api_url;

  constructor(private http: HttpClient) { }

  validateToken(token: string): Observable<any> {
    return this.http.get<any>(`${this.api}/auth/validate/${token}`);
  }

}
