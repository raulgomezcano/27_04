import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoFormComponent } from './producto-form/producto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoFormComponent,
    ProductoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
