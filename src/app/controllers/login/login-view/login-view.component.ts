import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service/user.service';
import { Storage } from '../../../storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  login = '';
  password = '';

  messages = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  private setSuccessMessage(message) {
    this.setMessage(message, 'success');
  }

  private setErrorMessage(message) {
    this.setMessage(message, 'error');
  }

  private setMessage(message: string, severity: string) {
    this.messages = [];
    const msg = { severity: severity, summary: 'Info', detail: message };
    this.messages.push(msg);
  }

  doLogin() {
    this.userService.login(this.login, this.password)
    .subscribe(
      (response) => {
        if (response.token !== null) {
          Storage.setToken(response.token);
          this.setSuccessMessage('Bem vindo');
          this.router.navigate(['home']);
        }
      },
      (error) => {
        this.setErrorMessage(error.error.message);
      }
    );
  }

}
