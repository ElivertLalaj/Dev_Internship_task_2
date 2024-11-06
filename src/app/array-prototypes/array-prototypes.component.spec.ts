import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPrototypesComponent } from './array-prototypes.component';

describe('ArrayPrototypesComponent', () => {
  let component: ArrayPrototypesComponent;
  let fixture: ComponentFixture<ArrayPrototypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayPrototypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayPrototypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
