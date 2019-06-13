import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectvehicleComponent } from './selectvehicle.component';
import { AppService } from '../service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterVehicles } from '../pipes/app.pipe';

describe('SelectvehicleComponent', () => {
  let component: SelectvehicleComponent;
  let fixture: ComponentFixture<SelectvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectvehicleComponent, FilterVehicles],
      providers: [AppService],
      imports: [HttpClientModule, RouterTestingModule]
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
