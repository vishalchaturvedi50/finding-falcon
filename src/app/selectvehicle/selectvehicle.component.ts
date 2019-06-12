import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { IVehicles } from '../models/vehicles';

@Component({
  selector: 'app-selectvehicle',
  templateUrl: './selectvehicle.component.html',
  styleUrls: ['./selectvehicle.component.scss']
})
export class SelectvehicleComponent implements OnInit {

  /* Selected planets */
  public selectedPlanets: Array<string> = [];

  /* SELECTED VEHICLES */
  public selectedVehicles: Array<string> = [];

  /* CURRENT VEHICHLE LIST TO DISPLAY */
  public currentVehicleList: Array<IVehicles> = [];

  public currentIndex: number = 0;

  /* ARRAY TO HOLD TOTAL TIME  */
  public totalTimeArr: Array<number> = [];

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.currentVehicleList = JSON.parse(JSON.stringify(this.appService.vehicleList));
    this.selectedPlanets = this.appService.falconeRequestData.planet_names;
  }

  /* Function to help us with vehicle selection */
  vehicleSelectionFn(vehicle: IVehicles, index: number) {
    this.selectedVehicles[this.currentIndex] = vehicle.name;

    //MODIFY TIME ACCORDINGLY
    let selectedPlanet = this.appService.planetsList.filter(planet =>
      planet.name == this.selectedPlanets[this.currentIndex]);
    if (selectedPlanet) {
      this.totalTimeArr[this.currentIndex] = selectedPlanet[0].distance / vehicle.speed;
    }
  }

  /* Function to modify current index */
  modifyCurrentIndexFn(ind: number) {
    let newIdx = this.currentIndex + ind;
    this.currentIndex = newIdx < 0 ? 0 : newIdx > 3 ? 4 : newIdx;
  }

  /* WHETHER OR NOT TO ENABLE NEXT ROUTE BTN */
  enableNextRouteBtnFn() {
    return this.selectedVehicles.length == 4 &&
      this.selectedVehicles.filter(x => { return x != null && x != "" });
  }

  /* GET total requried time */
  getTotalTimeFn() {
    let time = 0;
    this.totalTimeArr.forEach(x => {
      if (x > 0) {
        time += x;
      }
    })
    return time;
  }

}
