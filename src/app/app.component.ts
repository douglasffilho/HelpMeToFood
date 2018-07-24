import { Component, OnInit, NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('loaderElement')
  loader: ElementRef;

  constructor(private router: Router, private ngZone: NgZone, private renderer: Renderer) {  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  private showLoader() {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setElementStyle(this.loader, 'display', 'block');
    });
  }

  private hideLoader() {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setElementStyle(this.loader, 'display', 'none');
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showLoader();
    }

    if (event instanceof NavigationEnd) {
      this.hideLoader();
    }

    if (event instanceof NavigationCancel) {
      this.hideLoader();
    }

    if (event instanceof NavigationError) {
      this.hideLoader();
    }
  }
}
