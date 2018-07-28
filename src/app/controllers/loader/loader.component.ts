import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    this.showLoader();
  }

  showLoader() {
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.loader'), 'display', 'block');
  }

  hideLoader() {
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.loader'), 'display', 'none');
  }

}
