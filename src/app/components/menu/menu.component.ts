import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  edad: number = 25;
  objeto: any = {
    fecha: Date.now(),
    arreglo: [1, 2, 3]
  }
  fecha = new Date(2022, 1, 1);

  constructor() {
    //this.edad = 22;
  }

  ngOnInit(): void {
    //this.edad = 32;
  }

  onClick(): void {
    this.edad = 17;
  }
}
