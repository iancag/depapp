import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms'

interface Depas {id: number; price: number; model: string; type: string; city: string; currency: string; available: number; moveDate: string;}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() apartmentData = new EventEmitter<Depas>();

  constructor(private fb: FormBuilder) { }

  formularioContacto = this.fb.group({
    id: ['4'],
    price: ['4500'],
    model: ['apartment'],
    type: ['rent'],
    city: ['boston'],
    currency: ['usd'],
    available: ['1'],
    moveDate: ['2022-05-05']
  })

  guardar(){
    console.log(this.formularioContacto.value)
    this.apartmentData.emit(this.formularioContacto.value);
  }
  ngOnInit(): void {
  }
}
