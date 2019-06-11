import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
