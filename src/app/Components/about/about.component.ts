import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private _SharedService: SharedService) {}
  openWhatsApp() {
    this._SharedService.openWhatsApp();
  }
}
