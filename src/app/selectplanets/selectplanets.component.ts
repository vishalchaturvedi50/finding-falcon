import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../service/app.service';

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
  };

  /* BEFORE Moving to another page we will assign the values of selected planets to the service variable */
  ngOnDestroy(): void {
    this.appService.falconeRequestData.planet_names = this.selectedPlanets;
  }

}
