import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../service/app.service';
import { FooterConfig } from '../models/footer';

@Component({
  selector: 'app-selectplanets',
  templateUrl: './selectplanets.component.html',
  styleUrls: ['./selectplanets.component.scss']
})
export class SelectplanetsComponent implements OnInit, OnDestroy {


  /* ALL THE SELECTED PLANETS  */
  public selectedPlanets: Array<string> = [];

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.selectedPlanets = this.appService.falconeRequestData.planet_names;
    this.checkValidityandEmitFn();
  }


  /* ON CLICK ON PLANETS TO BE SELECTED */
  onClickOfPlanetFn(planetName: string) {
    let idx = this.selectedPlanets.indexOf(planetName);
    if (idx == -1) {
      if (this.selectedPlanets.length != 4) {
        this.selectedPlanets.push(planetName);
      }
    }
    else
      this.selectedPlanets.splice(idx, 1);

    this.checkValidityandEmitFn();
  };


  /* Function to check validity state - whether or not 4 planets have been selected
  and accordingly emit the action */
  checkValidityandEmitFn() {
    let bool = this.selectedPlanets.length == 4 ? true : false;
    let footer: FooterConfig = new FooterConfig();
    footer.showNextRouteBtn = bool;
    this.appService.footerDataSubj.next(footer);
  }

  /* BEFORE Moving to another page we will assign the values of selected planets to the service variable */
  ngOnDestroy(): void {
    this.appService.falconeRequestData.planet_names = this.selectedPlanets;
  }



}
