import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.router.navigate(['']);
  }
  
  constructor(private appService: AppService,
    private router: Router) { }

}
