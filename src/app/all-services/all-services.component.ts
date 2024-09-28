import { Component } from '@angular/core';
import { AllServices } from '../interfaces/all-services';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css'],
})
export class AllServicesComponent {
  data: AllServices[] = [
    { name: 'علاج الإنزلاق الغضروفي "الديسك" بدون جراحة' },
    { name: 'علاج آلام الظهر والرقبة' },
    { name: 'علاج الإصابات الرياضية واصابات الملاعب' },
    { name: 'مشاكل الاوتار والاربطة والغضاريف' },
    { name: 'علاج العصب السابع' },
    { name: 'علاج اصابات غضاريف واربطة الركبة' },
    { name: 'علاج الشوكة العظمية والتهاب باطن القدم والكعب' },
    { name: 'علاج خشونة الركبة' },
    { name: 'علاج التهاب عرق النسا' },
    { name: 'علاج إصابات وآلام الكتف' },
    { name: 'علاج مشاكل الفك (TMJ)' },
    { name: 'علاج خشونة المفاصل' },
    { name: 'علاج ما بعد عمليات تغيير المفاصل' },
    { name: 'علاج آلام الكوع والرسغ واليد والقدم' },
  ];
}
