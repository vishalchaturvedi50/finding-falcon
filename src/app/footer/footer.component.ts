import { Component, OnInit } from '@angular/core';
import { routePaths } from '../app-routing.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  /* varible to hold the path of next screen */
  public selectPlanetsRoutePath: string = routePaths.selectplanets;


  constructor() { }

  ngOnInit() {
  }

}
