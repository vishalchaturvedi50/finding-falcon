import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { IFalconeAPIResponse, ResponseStatus } from '../models/falconeapi';
import { FooterConfig } from '../models/footer';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  /* Variable to handle the section to be shown - 0 means success -1 mean error */
  public sectionToShow: number;

  public responseData: { planetName: string, vehicleName: string } = { planetName: "", vehicleName: "" };

  constructor(private appService: AppService) { }

  ngOnInit() {
    /* FOOTER CONFIG */
    let footerConfig = new FooterConfig();
    footerConfig.nextRouteBtnText = `Let's Retry to find the Falcone!`;
    this.appService.footerDataSubj.next(footerConfig);

    /* FIND FALCONE API CALL */
    this.appService.findFalconeFn().
      subscribe((response: IFalconeAPIResponse) => {
        if (response.status == ResponseStatus.error) {
          this.sectionToShow = -1;
        }
        else if (response.status == ResponseStatus.success) {
          let idx = this.appService.falconeRequestData.planet_names.indexOf(response.planet_name);
          this.responseData.planetName = response.planet_name;
          this.responseData.vehicleName = this.appService.falconeRequestData.vehicle_names[idx];
          this.sectionToShow = 0;
        }
      });
  };

}
