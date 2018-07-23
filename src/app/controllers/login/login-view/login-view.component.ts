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

  constructor(private router: Router, private userService: UserService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  private showErrorMessage(message, action) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 10000 });
    snackBarRef.onAction().subscribe(() => {
      this.userService.forgotPassword(this.login)
      .subscribe(
        (response) => console.log(response),
        (error) => {
          console.log(error);
          if (error.status === 0) {
            this.showErrorMessage('Por favor, informe seu e-mail de login', '');
          }
          if (error.status === 400) {
            this.showErrorMessage(error.error.message, '');
          }
        }
      );
    });
  }

  doLogin() {
    this.userService.login(this.login, this.password)
    .subscribe(
      (response) => {
        if (response.token !== null) {
          Storage.setToken(response.token);
          this.router.navigate(['home']);
        }
      },
      (error) => {
        this.showErrorMessage(error.error.message, 'Esqueci minha senha');
      }
    );
  }

}
