import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrendsComponent } from './current-trends.component';

describe('CurrentTrendsComponent', () => {
  let component: CurrentTrendsComponent;
  let fixture: ComponentFixture<CurrentTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
