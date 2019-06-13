import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../service/app.service';
import { IVehicles } from '../models/vehicles';
import { FooterBtnClick, FooterConfig } from '../models/footer';

@Component({
  selector: 'app-selectvehicle',
  templateUrl: './selectvehicle.component.html',
  styleUrls: ['./selectvehicle.component.scss']
})
export class SelectvehicleComponent implements OnInit, OnDestroy {

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
    this.subsToFooterBtnClicksFn();
    this.validateStateAndEmitFooterConfigFn();
  }

  /* Function to help us with vehicle selection */
  vehicleSelectionFn(vehicle: IVehicles) {
    let previousValue = this.selectedVehicles[this.currentIndex];
    // in case previous value exsist 
    if (previousValue) {
      //find the index of previous value and increase the total count
      this.modifyIndexOfCurrentItemFn(previousValue, 1);
    }
    //assign the new value to the selected vehichles
    this.selectedVehicles[this.currentIndex] = vehicle.name;
    //Decrease count of vehichle used
    this.modifyIndexOfCurrentItemFn(vehicle.name, -1);

    //MODIFY TIME ACCORDINGLY
    let selectedPlanet = this.appService.planetsList.filter(planet =>
      planet.name == this.selectedPlanets[this.currentIndex]);
    if (selectedPlanet) {
      this.totalTimeArr[this.currentIndex] = selectedPlanet[0].distance / vehicle.speed;
    }

    this.validateStateAndEmitFooterConfigFn();
  }

  /**
   * Function to mdoify the current index of selected vehicle
   * @param vehicleName 
   * @param noForIncrement 
   */
  modifyIndexOfCurrentItemFn(vehicleName: string, noForIncrement: number) {
    let tempIdxPrevValue = this.currentVehicleList.findIndex(x => x.name == vehicleName);
    this.currentVehicleList[tempIdxPrevValue].total_no += noForIncrement;
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


  /* Function to validate current state and emit configuration */
  validateStateAndEmitFooterConfigFn() {
    let config: FooterConfig = new FooterConfig();
    config.showNextRouteBtn = this.selectedVehicles.length == 4;
    config.showPreviousBtn = true;
    config.showNextBtn = true;
    config.previousBtnDisabled = this.currentIndex == 0;
    config.nextBtnDisabled = this.currentIndex == this.selectedPlanets.length - 1;
    this.appService.footerDataSubj.next(config);
  }

  /* Function to subscribe to footer btn clicks */
  subsToFooterBtnClicksFn() {
    this.appService.footerBtnClickSubj.subscribe((resp) => {
      if (resp == FooterBtnClick.Previous) {
        this.currentIndex -= 1;
      }
      else if (resp == FooterBtnClick.Next) {
        this.currentIndex += 1;
      }
      this.validateStateAndEmitFooterConfigFn();
    })
  }


  /* BEFORE DESTROY - assign the value of selected vehicle to the app servie */
  ngOnDestroy(): void {
    this.appService.footerDataSubj.next(new FooterConfig());
    this.appService.falconeRequestData.vehicle_names = this.selectedVehicles;
    this.appService.totalTimeTaken = this.getTotalTimeFn();
  }



}
