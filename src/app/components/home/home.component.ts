import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  city: string;
  cityTemp: string;

  constructor() { }

  ngOnInit() {
  }

  sendToTemp() {
    this.cityTemp = this.city;
    this.city = null;
  }

}
