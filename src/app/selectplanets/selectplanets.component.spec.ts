import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectplanetsComponent } from './selectplanets.component';
import { AppService } from '../service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SelectplanetsComponent', () => {
  let component: SelectplanetsComponent;
  let fixture: ComponentFixture<SelectplanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectplanetsComponent],
      providers: [AppService],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectplanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
