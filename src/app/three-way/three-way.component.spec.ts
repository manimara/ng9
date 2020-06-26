import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWayComponent } from './three-way.component';

describe('ThreeWayComponent', () => {
  let component: ThreeWayComponent;
  let fixture: ComponentFixture<ThreeWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
