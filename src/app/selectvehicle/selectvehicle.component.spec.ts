import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectvehicleComponent } from './selectvehicle.component';

describe('SelectvehicleComponent', () => {
  let component: SelectvehicleComponent;
  let fixture: ComponentFixture<SelectvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
