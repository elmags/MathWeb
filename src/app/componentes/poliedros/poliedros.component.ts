import { Component, OnInit } from '@angular/core';
import { Poliedro } from './poliedro/Poliedro';

@Component({
  selector: 'app-poliedros',
  templateUrl: './poliedros.component.html',
  styleUrls: ['./poliedros.component.css']
})
export class PoliedrosComponent implements OnInit {

  nCaras: string[] = ["4", "5", "6", "7", "8", "100", "1000", "10000", "infinito"];
  names: string[] = ["tetraedro", "pentaedro", "hexaedro", "heptaedro", "octaedro", 
                     "hectaedro", "chiliedro", "miriedro", "apeiredro"];
  _poliedros: Poliedro[] = [];

  constructor() { this.poliedros() }

  ngOnInit(): void {
  }

  private poliedros() {
    for (let i = 0; i < this.nCaras.length; i++) {
      let newPoliedro: Poliedro = new Poliedro(this.nCaras[i], this.names[i]);
      this._poliedros?.push(newPoliedro);
    }
  }
}
