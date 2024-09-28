import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private _SharedService:SharedService){}


  makePhoneCall(){
    this._SharedService.makePhoneCall()
  }

  openWhatsApp(){
    this._SharedService.openWhatsApp()
  }
}

