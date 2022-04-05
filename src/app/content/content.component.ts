import { Component, OnInit } from '@angular/core';

const depasDataSource = [{
  id: 1,
  price: 1000,
  model: 'apartment',
  type: 'rent',
  city: 'paris',
  currency: 'eur',
  available: 1,
  moveDate: '2020-04-02'
},{
  id: 2,
  price: 700,
  model: 'apartment',
  type: 'rent',
  city: 'nyc',
  currency: 'usd',
  available: 0,
  moveDate: '2020-05-01'
},{
  id: 3,
  price: 500,
  model: 'apartment',
  type: 'rent',
  city: 'madrid',
  currency: 'eur',
  available: 1,
  moveDate: '2020-04-15'
}];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  depas = depasDataSource;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd($event: any){
    console.log($event)
    this.depas.push($event)
  }
}
