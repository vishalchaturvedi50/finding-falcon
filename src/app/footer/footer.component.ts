import { Component, OnInit } from '@angular/core';
import { routePaths } from '../app-routing.module';
import { AppService } from '../service/app.service';
import { Route, Routes, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  /* varible to hold the path of next screen */
  public nextRouteUrl: string = "";


  constructor(private appService: AppService, private router: Router) {
    this.subscribeToRouteChangesFn();
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

  /* Function to set next route url on the basics of current url */
  setNextRouteUrlFn(currentUrl: string = "") {
    let nextUrl = "";
    switch (currentUrl) {
      case "/": nextUrl = routePaths.selectplanets;
        break;
      case `/${routePaths.selectplanets}`: nextUrl = routePaths.selectvehicles;
        break;
    }
    this.nextRouteUrl = nextUrl;
  }

}
