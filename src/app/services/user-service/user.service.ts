import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../../models/user/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = environment.oauth_api_url;

  constructor(private http: HttpClient) { }

  login(email, password): Observable<any> {
    const login = new Login(email, password);
    return this.http.post<any>(`${this.api}/auth`, login);
  }

}
