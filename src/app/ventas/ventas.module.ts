import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { VentasDetalleComponent } from './pages/ventas-detalle/ventas-detalle.component';
import { VentasListaComponent } from './pages/ventas-lista/ventas-lista.component';



@NgModule({
  declarations: [
    VentasDetalleComponent,
    VentasListaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
