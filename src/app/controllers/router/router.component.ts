import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html'
})
export class RouterComponent implements OnInit {

  loading = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }

  ngOnInit() {
  }

}
