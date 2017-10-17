import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansWallComponent } from './plans-wall.component';

describe('PlansWallComponent', () => {
  let component: PlansWallComponent;
  let fixture: ComponentFixture<PlansWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
