export class DetallesProducto{
    pedidoID:number
    productoID:number
    cantidad:number
    constructor(_pedidoID:number, _productoID:number, _cantidad:number){
        this.pedidoID=_pedidoID
        this.productoID=_productoID
        this.cantidad=_cantidad
    }
}