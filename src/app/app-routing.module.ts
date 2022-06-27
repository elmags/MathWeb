import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcueductoDeSegoviaComponent } from './componentes/obras/acueducto-de-segovia/acueducto-de-segovia.component';
import { BaptisterioDeSanJuanComponent } from './componentes/obras/baptisterio-de-san-juan/baptisterio-de-san-juan.component';
import { CatedralDePisaComponent } from './componentes/obras/catedral-de-pisa/catedral-de-pisa.component';
import { GranMezquitaDeSamarraComponent } from './componentes/obras/gran-mezquita-de-samarra/gran-mezquita-de-samarra.component';
import { AdrianoComponent } from './componentes/obras/panteon-roma/adriano/adriano.component';
import { MuroDeAdrianoComponent } from './componentes/obras/panteon-roma/muro-de-adriano/muro-de-adriano.component';
import { PanteonRomaComponent } from './componentes/obras/panteon-roma/panteon-roma/panteon-roma.component';
import { SantiponceComponent } from './componentes/obras/panteon-roma/santiponce/santiponce.component';
import { PartenonComponent } from './componentes/obras/partenon/partenon.component';
import { PiramidesDeGuizaComponent } from './componentes/obras/piramides-de-guiza/piramides-de-guiza.component';
import { FilareteComponent } from './componentes/obras/sforzinda/filarete/filarete.component';
import { SforzindaComponent } from './componentes/obras/sforzinda/sforzinda/sforzinda.component';
import { TemploKandariyaComponent } from './componentes/obras/templo-kandariya/templo-kandariya.component';
import { TorrePisaComponent } from './componentes/obras/torre-pisa/torre-pisa.component';
import { PiramidesComponent } from './componentes/poliedros/piramides/piramides.component';
import { PoliedrosComponent } from './componentes/poliedros/poliedros.component';
import { PoligonosComponent } from './componentes/poligonos/poligonos.component';
import { CuadrilateroComponent } from './componentes/poligonos/tipos-poligonos/cuadrilatero/cuadrilatero.component';
import { OctogonoComponent } from './componentes/poligonos/tipos-poligonos/octogono/octogono.component';
import { TrianguloComponent } from './componentes/poligonos/tipos-poligonos/triangulo/triangulo.component';

const routes: Routes = [
  {path : 'inicio', component : InicioComponent},
  {path : '', component : InicioComponent},
  {path : 'panteonRoma', component : PanteonRomaComponent},
  {path : 'adriano', component : AdrianoComponent},
  {path : 'santiponce', component : SantiponceComponent},
  {path : 'muroAdriano', component : MuroDeAdrianoComponent},
  {path : 'sforzinda', component : SforzindaComponent},
  {path : 'torrePisa', component : TorrePisaComponent},
  {path : 'catedralPisa', component : CatedralDePisaComponent},
  {path : 'mezquitaSamarra', component : GranMezquitaDeSamarraComponent},
  {path : 'piramidesGiza', component : PiramidesDeGuizaComponent},
  {path : 'acueductoSegovia', component : AcueductoDeSegoviaComponent},
  {path : 'templo', component : TemploKandariyaComponent},
  {path : 'partenon', component : PartenonComponent},
  {path : 'baptisterio', component : BaptisterioDeSanJuanComponent},
  {path : 'filarete', component : FilareteComponent},
  {path : 'poligonos', component : PoligonosComponent},
  {path : 'triangulo', component : TrianguloComponent},
  {path : 'cuadrilatero', component : CuadrilateroComponent},
  {path : 'octogono', component : OctogonoComponent},
  {path : 'poliedros', component : PoliedrosComponent},
  {path : 'piramides', component : PiramidesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
