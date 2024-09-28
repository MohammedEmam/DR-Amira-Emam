import { Component } from '@angular/core';
import { ServicesContent } from 'src/app/interfaces/services-content';
import { ServicesDataService } from 'src/app/services/services-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  constructor(private _ServicesDataService: ServicesDataService) {
    this.data = this._ServicesDataService.data;
  }

  data: ServicesContent[] = [];

  isShow(index: number) {
    this.data[index].isshow = !this.data[index].isshow;

    for (let x = 0; x < this.data.length; x++) {
      if (x !== index) {
        this.data[x].isshow = false;
      }
    }
  }
}
