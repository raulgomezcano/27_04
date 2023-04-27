import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { DetallesProducto } from '../pedido/detallesProducto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent {
  constructor(public miServicio:ServicioService, private router:Router, public activatedRoute: ActivatedRoute){}

  pedidoID: number
  productoID: number
  cantidad: number


  formulario:FormGroup = new FormGroup({
    pedidoID: new FormControl(0),
    prodcutoID: new FormControl(0),
    cantidad: new FormControl('')
  })

  ngOnInit(){
    //recoger pedidoID
    this.activatedRoute.params.subscribe(data=>{
      this.pedidoID=data['pedidoID'];
      this.formulario=new FormGroup({
        pedidoID : new FormControl(this.pedidoID),
        productoID : new FormControl(this.productoID),
        cantidad: new FormControl(this.cantidad)
      });
      // Para que el ID de pedido no se pueda modificar en el producto
      this.formulario.controls['pedidoID'].disable()
    });
  }

  // enviar array al padre
  @Output() enviarDatos = new EventEmitter<DetallesProducto[]>();
  agregarProducto(){
    alert("Producto añadido")
    this.enviarDatos.emit(this.formulario.value)
    this.miServicio.agregarProductoServicio(this.formulario.value)
    this.router.navigate([''])
  }
}
