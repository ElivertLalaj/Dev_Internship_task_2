import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedCacheComponent } from './timed-cache.component';

describe('TimedCacheComponent', () => {
  let component: TimedCacheComponent;
  let fixture: ComponentFixture<TimedCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimedCacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimedCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
