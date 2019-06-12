import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { SelectplanetsComponent } from './selectplanets/selectplanets.component';
import { SelectvehicleComponent } from './selectvehicle/selectvehicle.component';
import { ResultsComponent } from './results/results.component';

export const routePaths = {
  selectplanets: "selectplanets",
  selectvehicles: "selectvehicles",
  results: "results"
}

const routes: Routes = [
  {
    path: "", component: IntroductionComponent
  },
  {
    path: routePaths.selectplanets, component: SelectplanetsComponent
  },
  {
    path: routePaths.selectvehicles, component: SelectvehicleComponent
  }, {
    path: routePaths.results, component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
