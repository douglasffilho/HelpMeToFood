import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '../../storage';
import { TokenService } from '../../services/user-service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private token: string;

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.token = Storage.getToken() || '';

      this.tokenService.validateToken(this.token)
      .subscribe(
        (response) => {
          Storage.setToken(response.token);
          this.token = response.token;
        },
        (error) => {
          console.log(error);
          if (error.status !== 200 &&
              error.status !== 202 &&
              error.status !== 204 &&
              error.status !== 304) {
            this.token = null;
            Storage.setToken('');
            this.router.navigate(['/login']);
          }
        }
      );

      if (this.token !== '') {
        return true;
      } else {
        return false;
      }
  }
}
