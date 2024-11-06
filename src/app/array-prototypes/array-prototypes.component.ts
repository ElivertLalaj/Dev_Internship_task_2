import { Component } from '@angular/core';



@Component({
  selector: 'app-array-prototypes',
  standalone: true,
  imports: [],
  templateUrl: './array-prototypes.component.html',
  styleUrl: './array-prototypes.component.css'
})
export class ArrayPrototypesComponent {

  CustomArray = class extends Array<any> {
    lastElement(): any {
      const length = this.length - 1;
      return length >= 0 ? this[length] : -1;
    }

    testElti(): boolean {
      return true;
    }
  };

  testArray: any;
  lastElement: any;
  testEltiResult: boolean;

  constructor() {
    this.testArray = new this.CustomArray(1, 'sad', 5, null, 2, 'elivert');
    this.lastElement = this.testArray.lastElement();
    this.testEltiResult = this.testArray.testElti();
    console.log(this.testArray);
    console.log(this.lastElement)
    console.log(this.testEltiResult)


  }


}
