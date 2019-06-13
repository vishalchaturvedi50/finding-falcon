import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { FooterBtnClick } from '../models/footer';
import { AppService } from '../service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [AppService],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should be created ', () => {
    expect(component).toBeTruthy();
  });

  it('Should be intitialized with ENUM', () => {
    expect(component.footerBtns).toEqual(FooterBtnClick);
  });


  it('Should be intitialized with ENUM', () => {
    expect(component.footerBtns).toEqual(FooterBtnClick);
  });


});
