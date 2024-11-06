import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixTraversalComponent } from './matrix-traversal.component';

describe('MatrixTraversalComponent', () => {
  let component: MatrixTraversalComponent;
  let fixture: ComponentFixture<MatrixTraversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixTraversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
