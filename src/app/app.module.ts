import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './service/app.service';
import { IntroductionComponent } from './introduction/introduction.component';
import { SelectplanetsComponent } from './selectplanets/selectplanets.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SelectvehicleComponent } from './selectvehicle/selectvehicle.component';
import { FilterVehicles } from './pipes/app.pipe';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    SelectplanetsComponent,
    FooterComponent,
    HeaderComponent,
    SelectvehicleComponent,
    FilterVehicles,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
