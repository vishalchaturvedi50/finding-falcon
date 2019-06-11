import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectplanetsComponent } from './selectplanets.component';

describe('SelectplanetsComponent', () => {
  let component: SelectplanetsComponent;
  let fixture: ComponentFixture<SelectplanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectplanetsComponent ]
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
