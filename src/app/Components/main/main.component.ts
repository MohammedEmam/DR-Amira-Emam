import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SharedService } from 'src/app/services/shared.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesDataService } from 'src/app/services/services-data.service';
import { ServicesContent } from 'src/app/interfaces/services-content';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  data: ServicesContent[] = [];

  constructor(
    private _SharedService: SharedService,
    private _ServicesDataService: ServicesDataService
  ) {
    this.data = this._ServicesDataService.data;
    console.log(this.data);
  }

  openWhatsApp() {
    this._SharedService.openWhatsApp();
  }

  makePhoneCall() {
    this._SharedService.makePhoneCall();
  }

  customOptions: OwlOptions = {
    loop: true,
    rtl: true, // Enable RTL

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    items: 1,
    center: true,
    autoplayHoverPause: true,
    autoplaySpeed: 500,
    autoplayTimeout: 1000, // Speed of autoplay in milliseconds (3 seconds)
    smartSpeed: 500, // Speed of the slide transition in milliseconds (1 second)

    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   600: {
    //     items: 1,
    //   },
    //   800: {
    //     items: 2,
    //   },
    //   1000: {
    //     items: 3,
    //   },
    //   1200: {
    //     items: 3,
    //   },
    //   1400: {
    //     items: 3,
    //   },
    //   1600: {
    //     items: 4,
    //   },
    // },
    nav: false,
  };
}
