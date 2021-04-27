"use strict"


document.getElementById('boton').onclick = enviarValor;
const selector= document.getElementById('select');
const descripcionI= document.getElementById('descripcionI');
const descripcionE= document.getElementById('descripcionE');
const descripcion= document.getElementById('descripcion');
const valorE=document.getElementById('valorE');
const valorI= document.getElementById('valorI');
const valor= document.getElementById('valor');
const saldoPositivo= document.getElementById('saldoPositivo');
const saldoNegativo= document.getElementById('saldoNegativo');
const saldo= document.getElementById('saldo');
//const porcentajeI= document.getElementById('porcentajeI');
//const porcentajeE= document.getElementById('porcentajeE');

function enviarValor(){
    
    if(selector.value=="ingreso" && descripcion.value!="" && valor.value!=""){
        const parrafo= document.createElement('P'); //creamos los parrafos
        const parrafo2= document.createElement('P');
        const parrafo3= document.createElement('P');
        parrafo.textContent= descripcion.value; //detalle
        descripcionI.appendChild(parrafo); //añadimos el detalle
        parrafo2.textContent= `$${valor.value}`; //valor
        valorI.appendChild(parrafo2); //añadimos el valor
        suma();
        cambioSaldo();
        /*parrafo3.textContent = `${calculaPorcentaje()}%`;
        porcentajeI.appendChild(parrafo3);
        actualizarPorcentaje();*/
    }else if(selector.value=="egreso"){
        const parrafo= document.createElement('P');
        const parrafo2= document.createElement('P');
        const parrafo3= document.createElement('P');
        parrafo.textContent= descripcion.value;
        descripcionE.appendChild(parrafo);
        parrafo2.textContent= `$-${valor.value}`;
        valorE.appendChild(parrafo2);
        suma();
        cambioSaldo();
        /*parrafo3.textContent = `${calculaPorcentaje()}%`;
        porcentajeE.appendChild(parrafo3);
        actualizarPorcentaje();*/
    }else if(valor.value=="" && descripcion.value==""){
        alert("Error: No se ha ingresado valor ni detalle");
    }else if(descripcion.value==""){
        alert("Error: No se ha ingresado un Detalle");
    }else if(valor.value==""){
        alert("Error: No se ha ingresado un valor");
    }
    
}



// cambia el valor del saldo disponible
let cambioSaldo = () => {
    if (selector.value=="ingreso")saldo.textContent= parseInt(saldo.textContent) + parseInt(valor.value);
    else if(selector.value=="egreso")saldo.textContent= parseInt(saldo.textContent) - parseInt(valor.value);   
}

// hace la suma del egreso o del ingreso
let suma = () =>{
    if (selector.value=="ingreso") saldoPositivo.textContent= `${parseInt(saldoPositivo.textContent)+ parseInt(valor.value)}`;
    else if(selector.value=="egreso") saldoNegativo.textContent= `${parseInt(saldoNegativo.textContent)+ parseInt(valor.value)}`;   
}   
/*
//calcula el porcentaje de cada egreso e ingreso
let calculaPorcentaje = (a,i) =>{
    if (selector.value=="ingreso" && a!=1) {
        if ( parseInt(saldoPositivo.textContent) == 0) {
            return 100;
        } else if(parseInt(saldoPositivo.textContent) > 0){
            let porciento = (parseInt(valor.value) * 100) / saldoPositivo.textContent ; 
            porciento = Math.round( porciento );
            return porciento;
        }
    }else if(selector.value=="egreso" && a!=1){
        if ( parseInt(saldoNegativo.textContent) == 0) {
            return 100;
        } else if(parseInt(saldoNegativo.textContent) > 0){
            let porciento = (parseInt(valor.value) * 100) / saldoNegativo.textContent ; 
            porciento = Math.round( porciento );
            return porciento;
        }
    }if (selector.value=="ingreso" && a==1) {
        let numero = parseInt(porcentajeI.children[i].textContent.replace('$'));
        console.log("Esta entrando donde no debe");
        console.log(numero);
        if (numero!=100) {
            let porciento = (numero * 100) / saldoPositivo.textContent ; 
            console.log(porciento);
            porciento = Math.round( porciento );
            console.log(porciento);
            return porciento;
        }
        
    }else if(selector.value=="egreso" && a==1){
        let numero= parseInt(porcentajeE.children[i].textContent.replace('$'));
        if (numero != 100){
            let porciento = ( numero * 100) / saldoNegativo.textContent ; 
            porciento = Math.round( porciento );
            return porciento;
        }
        
    }
    
}

let actualizarPorcentaje = () => {
    if (selector.value=="ingreso"){
        let numero = parseInt(porcentajeI.children[1].textContent.replace('$'));
        console.log("esto vale numero "+numero);
        if(numero!=100){ 
            for (let i=0; i< porcentajeI.children.length; i++) {
                porcentajeI.children[i].textContent = calculaPorcentaje(1,i);
                console.log(porcentajeI.children[i].textContent);
            }
        }
    }else if(selector.value=="egreso"){

    }
}*/