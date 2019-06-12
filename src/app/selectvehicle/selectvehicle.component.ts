import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-selectvehicle',
  templateUrl: './selectvehicle.component.html',
  styleUrls: ['./selectvehicle.component.scss']
})
export class SelectvehicleComponent implements OnInit {


  /* SELECTED VEHICLES */
  public selectedVehicles: Array<string> = [];

  constructor(public appService: AppService) { }

  ngOnInit() {

  }

}
