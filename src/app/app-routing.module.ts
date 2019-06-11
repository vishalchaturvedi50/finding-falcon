import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { SelectplanetsComponent } from './selectplanets/selectplanets.component';

export const routePaths = {
  selectplanets: "selectplanets"
}

const routes: Routes = [
  {
    path: "", component: IntroductionComponent
  },
  {
    path: routePaths.selectplanets, component: SelectplanetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
