class Dato {
    constructor(nombre, cantidad){
        this.nombre=nombre;
        this.cantidad=cantidad;
    }

    
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }

    
    get getCantidad(){
        return this.cantidad;
    }
    set setCantidad(cantidad){
        this.cantidad=cantidad;
    }

    toString(){
        return `Detalle: ${this.nombre} \nCantidad: $${this.cantidad}`;
    }
}