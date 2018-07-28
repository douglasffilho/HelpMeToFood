import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html'
})
export class RouterComponent implements OnInit {

  @ViewChild(LoaderComponent)
  loader: LoaderComponent;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loader.showLoader();
      } if (event instanceof NavigationEnd) {
        this.loader.hideLoader();
      }
    });
  }

  ngOnInit() {
  }

}
