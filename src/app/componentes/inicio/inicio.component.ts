import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {  }  

  public random() {
    let nRandom: number = Math.floor(Math.random()*10);

    switch (nRandom) {
      case 1: 
        this.router.navigate(['acueductoSegovia']);
        break;
      case 2:
        this.router.navigate(['baptisterio']);
        break;
      case 3:
        this.router.navigate(['catedralPisa']);
        break;
      case 4:
        this.router.navigate(['mezquitaSamarra']);
        break;
      case 5:
        this.router.navigate(['panteonRoma']);
        break;
      case 6:
        this.router.navigate(['partenon']);
        break;
      case 7:
        this.router.navigate(['piramidesGiza']);
        break;
      case 8:
        this.router.navigate(['sforzinda']);
        break;
      case 9:
        this.router.navigate(['templo']);
        break;
      case 10:
        this.router.navigate(['torrePisa']);
        break;
    }
  }
}
