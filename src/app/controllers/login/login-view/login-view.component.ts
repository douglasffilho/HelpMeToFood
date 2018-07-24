import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service/user.service';
import { Storage } from '../../../storage';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  login = '';
  password = '';

  messages = [];

  processingLogin = false;

  constructor(private router: Router, private userService: UserService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  private showSnack(message, action) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 10000 });
    snackBarRef.onAction().subscribe(() => {
      this.doForgotMyPassword();
    });
  }

  doForgotMyPassword() {
    this.processingLogin = true;
    this.userService.forgotPassword(this.login)
    .subscribe(
      (response) => {
        this.processingLogin = false;
        if (response.message !== undefined) {
          this.showSnack(response.message, '');
        }
      },
      (error) => {
        this.processingLogin = false;
        if (error.status === 0) {
          this.showSnack('Por favor, informe seu e-mail de login', '');
        }
        if (error.status === 400) {
          this.showSnack(error.error.message, '');
        }
      }
    );
  }

  doLogin() {
    this.processingLogin = true;
    this.userService.login(this.login, this.password)
    .subscribe(
      (response) => {
        this.processingLogin = false;
        if (response.token !== null) {
          Storage.setToken(response.token);
          this.router.navigate(['home']);
        }
      },
      (error) => {
        this.processingLogin = false;
        if (error.status === 400) {
          this.showSnack(error.error.message, '');
        } if (error.status === 403) {
          this.showSnack('Usuário ou senha inválidos', 'Esqueci minha senha');
        } else {
          this.showSnack('Erro no servidor', '');
        }
      }
    );
  }

}
