import { Component, OnInit, Input } from '@angular/core';
import { routePaths } from '../app-routing.module';
import { AppService } from '../service/app.service';
import { Route, Routes, Router, NavigationEnd } from '@angular/router';
import { FooterConfig, FooterBtnClick } from '../models/footer';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /* Footer button cong */
  public footerBtns = FooterBtnClick;

  /* Footer Configuration */
  public footerConfiguration: FooterConfig = new FooterConfig();

  /* varible to hold the path of next screen */
  public nextRouteUrl: string = "";


  constructor(private appService: AppService, private router: Router) {
    this.subscribeToRouteChangesFn();

    this.appService.footerDataSubj.subscribe((config: FooterConfig) => {
      this.footerConfiguration = config;
    });
  }

  ngOnInit() {
  }
  /* GET NEXT ROUTE PATH AS PER CURRENT STATUS */
  subscribeToRouteChangesFn() {
    this.router.events.subscribe(routeSubs => {
      if (routeSubs instanceof NavigationEnd) {
        console.log(routeSubs.url);
        this.setNextRouteUrlFn(routeSubs.url);
      }
    })
  }

  /* CLICK ON CHange of route button */
  clickForRouteChangeFn() {
    if (this.nextRouteUrl == `/${routePaths.home}`) {
      this.appService.resetFn();
    }
    this.router.navigate([this.nextRouteUrl]);
  }

  /* Function to set next route url on the basics of current url */
  setNextRouteUrlFn(currentUrl: string = "") {
    let nextUrl = "";
    switch (currentUrl) {
      case "/": nextUrl = routePaths.selectplanets;
        break;
      case `/${routePaths.selectplanets}`: nextUrl = routePaths.selectvehicles;
        break;
      case `/${routePaths.selectvehicles}`: nextUrl = routePaths.results;
        break;
      case `/${routePaths.results}`: nextUrl = routePaths.home
        break;
    }
    this.nextRouteUrl = `/${nextUrl}`;
  }

  /**
   * Function to emit next button click
   * @param value 
   */
  emitFooterBtnClickEventFn(value) {
    this.appService.footerBtnClickSubj.next(value);
  }

}
