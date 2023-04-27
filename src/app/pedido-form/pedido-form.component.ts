import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { Pedido } from '../pedido/pedido';
import { DetallesProducto } from '../pedido/detallesProducto';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {
constructor(public miServicio:ServicioService, private router:Router){}

formulario:FormGroup = new FormGroup({
  pedidoID: new FormControl(0),
  clienteID: new FormControl(0),
  forma_pago: new FormControl(''),
  direccion: new FormControl('')
})


// Obtencion del array de pedido
arrayPedidos= this.miServicio.arrayPedidosServicio
// Obtencion del array de producto
arrayProductos= this.miServicio.arrayProductoServicio

// recibir pedido del hijo
recibirPedido(pedidos:DetallesProducto[]){
  //this.arrayProductos=pedidos
  //alert('Array recibido: ' + this.arrayPedidos.values())
}

aceptarFormulario(){
  this.miServicio.agregarPedidoServicio(this.formulario.value)
  //this.miServicio.agregarProductoServicio(this.arrayProductos[0])
}

mostrarFormPedidos(){
  this.router.navigate(["/pedidos", this.formulario.value['pedidoID']])
}
}
