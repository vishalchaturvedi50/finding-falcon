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

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.currentVehicleList = this.appService.vehicleList;
    this.selectedPlanets = this.appService.falconeRequestData.planet_names;
  }

  /* Function to help us with vehicle selection */
  vehicleSelectionFn(vehicleName: string) {
    this.selectedVehicles[this.currentIndex] = vehicleName;
  }

  /* Function to modify current index */
  modifyCurrentIndexFn(ind: number) {
    let newIdx = this.currentIndex + ind;
    this.currentIndex = newIdx < 0 ? 0 : newIdx > 3 ? 4 : newIdx;
    this.setCurrentVehicleListFn();
  }

  /* WHETHER OR NOT TO ENABLE NEXT ROUTE BTN */
  enableNextRouteBtnFn() {
    return this.selectedVehicles.length == 4 &&
      this.selectedVehicles.filter(x => { return x != null && x != "" });
  }

  /* GET VEHICLE LIST TO ITERATE OVER */
  setCurrentVehicleListFn() {
    let vehichleInUse = this.selectedVehicles.slice(0, this.currentIndex + 1);
    this.currentVehicleList = this.appService.vehicleList.filter(x => {
      let retVal = false;
      if (vehichleInUse.indexOf(x.name) != -1) {
        let currentCount: number = vehichleInUse.filter(vehc => vehc == x.name).length;
        if (x.total_no - currentCount > 0) {
          retVal = true;
        }
      }
      else
        retVal = true;

      return retVal;
    })
  }

}
