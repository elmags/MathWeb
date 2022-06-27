import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathWeb';

  inicio: boolean;

  constructor() {  }

  ngOnInit(): void {
  }

  // if ((window.location.href).includes('inicio')) {
  //   return this.inicio = true;
  // }
  // else {
  //   return this.inicio = false;
  // }
  // console.log()
  // console.log(inicio)
}

