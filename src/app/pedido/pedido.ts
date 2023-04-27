export class Pedido{
    pedidoID:number
    clienteID:number
    forma_pago:string
    direccion:string
    constructor(_pedidoID:number, _clienteID:number, _forma_pago:string, _direccion:string){
        this.pedidoID=_pedidoID
        this.clienteID=_clienteID
        this.forma_pago=_forma_pago
        this.direccion=_direccion
    }
}