import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '../../storage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Storage.setToken('');
    this.router.navigate(['/login']);
  }

}
