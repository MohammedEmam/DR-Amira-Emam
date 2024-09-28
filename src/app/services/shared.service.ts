import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  openWhatsApp() {
    window.open('https://wa.me/201011577595', '_blank');
  }

  makePhoneCall() {
    window.location.href = 'tel:+201011577595';
  }
}
