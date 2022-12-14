/**
 * DropDownList Reactive Form Sample
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public dataApplied: { [key: string]: Object }[] = [
    { Key: 'Nilesh', Value: '6baf7ec2-8c99-4837-b83d-63a0c5cef532' },
    { Key: 'Nikunj', Value: '2d4f2675-847b-44dc-9134-f0d9195bdc7c' },
    { Key: 'Harsh', Value: 'b875de15-573b-47c2-af1b-f7a4f46a6079' },
    { Key: 'Umang', Value: '00402a2c-eb63-47f3-90ca-b46494c21914' },
    { Key: 'Karan', Value: 'f83c2c2a-d921-476a-b10d-2b9158ded9b2' },
  ];

  public fields: { [key: string]: string } = { text: 'Key', value: 'Value' };

  name = 'Angular 6';

  fieldArray: Array<any> = [
    {
      name: 'Default Name 1',
    },
  ];
  newAttribute: any = {};

  isEditItems: boolean;

  // candidates: any[] = [
  //   {
  //     'name': 'Default Name',
  //     'title': 'Job Title',
  //   },
  //   {
  //     'name': 'Default Name 2',
  //     'title': 'Job Title',
  //   }
  // ];

  addFieldValue(index) {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
}
