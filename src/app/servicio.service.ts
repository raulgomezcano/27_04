import { Injectable } from '@angular/core';
import { Pedido } from './pedido/pedido';
import { DetallesProducto } from './pedido/detallesProducto';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
  arrayPedidosServicio:Pedido[]=[]
  arrayProductoServicio:DetallesProducto[]=[]

agregarPedidoServicio(pedidoObjeto:Pedido){
  this.arrayPedidosServicio.push(pedidoObjeto)
}

  agregarProductoServicio(productoObjeto:DetallesProducto){
    this.arrayProductoServicio.push(productoObjeto)
    // alert('PedidoID: ' + this.arrayProducto[0].pedidoID + 'ProductoID: ' + this.arrayProducto[0].productoID + 'Cantidad: ' + this.arrayProducto[0].cantidad)
  }
}
