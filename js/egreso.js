class Egreso extends Dato {

    static contador=0;

    constructor(nombre, cantidad){
        super(nombre, cantidad);
        this.id= ++Egreso.contador;
    }

    get getId(){
        return this.id;
    }

    toString(){
        return `Id: ${this.id} ${super.toString}`;
    }

}