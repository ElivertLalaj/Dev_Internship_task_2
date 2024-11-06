import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeArraysComponent } from './merge-arrays.component';

describe('MergeArraysComponent', () => {
  let component: MergeArraysComponent;
  let fixture: ComponentFixture<MergeArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeArraysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
