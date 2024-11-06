import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-merge-arrays',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './merge-arrays.component.html',
  styleUrl: './merge-arrays.component.css'
})
export class MergeArraysComponent {

  nums1Str: string = '';
  nums2Str: string = ''; 
  nums1: number[] = []; 
  nums2: number[] = [];  
  m: number = 0;
  n: number = 0;
  mergedArray: number[] = []; 

 
  mergeArrays(): void {
    this.nums1 = this.nums1Str.split(',').map(num => parseInt(num.trim(), 10));
    this.nums2 = this.nums2Str.split(',').map(num => parseInt(num.trim(), 10));

    this.m = this.nums1.filter(num => num !== 0).length;
    this.n = this.nums2.length;

    console.log("Initial nums1:", this.nums1);
    console.log("Initial nums2:", this.nums2);
    console.log("Calculated value of m:", this.m);
    console.log("Calculated value of n:", this.n);

    let nums1Copy = [...this.nums1.slice(0, this.m), ...Array(this.n).fill(0)];
    console.log("Initial nums1Copy (with padding for nums2):", nums1Copy);

    let i = this.m - 1; 
    let j = this.n - 1; 
    let k = this.m + this.n - 1;

    while (i >= 0 && j >= 0) {
      if (nums1Copy[i] > this.nums2[j]) {
        nums1Copy[k] = nums1Copy[i];
        console.log(`Placing ${nums1Copy[i]} from nums1Copy to position ${k}`);
        i--;
      } else {
        nums1Copy[k] = this.nums2[j];
        console.log(`Placing ${this.nums2[j]} from nums2 to position ${k}`);
        j--;
      }
      k--;
    }

    while (j >= 0) {
      nums1Copy[k] = this.nums2[j];
      console.log(`Placing remaining ${this.nums2[j]} from nums2 to position ${k}`);
      j--;
      k--;
    }

    this.mergedArray = nums1Copy; 
    console.log("Final merged array:", this.mergedArray);
  }


}
  

