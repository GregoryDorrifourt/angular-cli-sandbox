import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaiResultsComponent } from './fai-results.component';

describe('FaiResultsComponent', () => {
  let component: FaiResultsComponent;
  let fixture: ComponentFixture<FaiResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaiResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
