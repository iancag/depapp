import { Component, OnInit, Input } from '@angular/core';

interface Depas {id: number; price: number; model: string; type: string; city: string; currency: string; available: number; moveDate: string;}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() depasDataSource: Depas[] = []
  displayedColumns: string[] = ['id', 'price', 'model', 'type', 'city', 'currency', 'status', 'move date']
  depas = this.depasDataSource;

  constructor() { }

  ngOnInit(): void {
    this.depas = this.depasDataSource;
  }
}
