import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./pages/ventas-lista/ventas-lista.module').then(m => m.VentasListaModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/ventas-detalle/ventas-detalle.module').then(m => m.VentasDetalleModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class VentasRoutingModule { }
