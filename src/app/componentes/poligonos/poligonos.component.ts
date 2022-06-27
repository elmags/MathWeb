import { Component, OnInit } from '@angular/core';
import { Poligono } from './poligono/Poligono';

@Component({
  selector: 'app-poligonos',
  templateUrl: './poligonos.component.html',
  styleUrls: ['./poligonos.component.css']
})
export class PoligonosComponent implements OnInit {

  nLados: string[] = ["3", "4", "5", "6", "7", "8", "100", "1000", "10000", "infinito"];
  names: string[] = ["triángulo", "cuadrilátero", "pentágono", "hexágono", "heptágono", "octógono", "hectágono", "chiliágono", "miriágono", "apeirógono"];
  regularNames: string[] = ["triángulo equilatero", "cuadrado", "pentágono regular", "hexágono regular", "heptágono regular", "octógono regular",
                  "hectágono regular", "chiliágono regular", "miriágono regular", "apeirógono regular"];
  _poligonos: Poligono[] = [];

  constructor() { this.poligonos(); }

  ngOnInit(): void {
  }

  private poligonos() {
    for (let i = 0; i < this.nLados.length; i++) {
      let newPoligono: Poligono = new Poligono(this.nLados[i], this.names[i], this.regularNames[i]);
      this._poligonos?.push(newPoligono);
    }
  }
}
