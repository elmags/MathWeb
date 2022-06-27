import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PanteonRomaComponent } from './componentes/obras/panteon-roma/panteon-roma/panteon-roma.component';
import { AdrianoComponent } from './componentes/obras/panteon-roma/adriano/adriano.component';
import { MuroDeAdrianoComponent } from './componentes/obras/panteon-roma/muro-de-adriano/muro-de-adriano.component';
import { SantiponceComponent } from './componentes/obras/panteon-roma/santiponce/santiponce.component';
import { SforzindaComponent } from './componentes/obras/sforzinda/sforzinda/sforzinda.component';
import { FilareteComponent } from './componentes/obras/sforzinda/filarete/filarete.component';
import { TorrePisaComponent } from './componentes/obras/torre-pisa/torre-pisa.component';
import { GranMezquitaDeSamarraComponent } from './componentes/obras/gran-mezquita-de-samarra/gran-mezquita-de-samarra.component';
import { PiramidesDeGuizaComponent } from './componentes/obras/piramides-de-guiza/piramides-de-guiza.component';
import { CatedralDePisaComponent } from './componentes/obras/catedral-de-pisa/catedral-de-pisa.component';
import { AcueductoDeSegoviaComponent } from './componentes/obras/acueducto-de-segovia/acueducto-de-segovia.component';
import { TemploKandariyaComponent } from './componentes/obras/templo-kandariya/templo-kandariya.component';
import { PartenonComponent } from './componentes/obras/partenon/partenon.component';
import { BaptisterioDeSanJuanComponent } from './componentes/obras/baptisterio-de-san-juan/baptisterio-de-san-juan.component';
import { PoligonosComponent } from './componentes/poligonos/poligonos.component';
import { TrianguloComponent } from './componentes/poligonos/tipos-poligonos/triangulo/triangulo.component';
import { CuadrilateroComponent } from './componentes/poligonos/tipos-poligonos/cuadrilatero/cuadrilatero.component';
import { OctogonoComponent } from './componentes/poligonos/tipos-poligonos/octogono/octogono.component';
import { PoliedrosComponent } from './componentes/poliedros/poliedros.component';
import { PiramidesComponent } from './componentes/poliedros/piramides/piramides.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    InicioComponent,
    PanteonRomaComponent,
    AdrianoComponent,
    MuroDeAdrianoComponent,
    SantiponceComponent,
    SforzindaComponent,
    FilareteComponent,
    TorrePisaComponent,
    GranMezquitaDeSamarraComponent,
    PiramidesDeGuizaComponent,
    CatedralDePisaComponent,
    AcueductoDeSegoviaComponent,
    TemploKandariyaComponent,
    PartenonComponent,
    BaptisterioDeSanJuanComponent,
    PoligonosComponent,
    TrianguloComponent,
    CuadrilateroComponent,
    OctogonoComponent,
    PoliedrosComponent,
    PiramidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
