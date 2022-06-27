import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acueducto-de-segovia',
  templateUrl: './acueducto-de-segovia.component.html',
  styleUrls: ['./acueducto-de-segovia.component.css']
})
export class AcueductoDeSegoviaComponent implements OnInit {

  inicio: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.inicio = false;
    console.log(this.inicio);
  }

}
