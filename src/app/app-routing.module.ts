import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

const routes: Routes = [
  {path:"", component:PedidoFormComponent, children:[
    {path:"pedidos/:pedidoID", component:ProductoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
