// declaracion de variables y asignacion de tipado
interface Transp{
    motor:number,
    marca:string,
    color:string,
    capacidad:number,
    precio:number

};

// objeto transporte terrestre
const prime: Transp = {
    motor: 1200,
    marca: 'freefire',
    color: 'verde',
    capacidad: 4,
    precio: 1300
}
// objeto transporte terrestre
const primer:Transp = {
    motor: 200,
    marca: 'bmw',
    color: 'rojo',
    capacidad: 20,
    precio: 300
}
// objeto transporte acuatico
const primerAgua:Transp = {
    motor: 1500,
    marca: 'freefire',
    color: 'blanco',
    capacidad: 8,
    precio: 2000
}
// clase Padre, de la cual heredaran los hijos, avion, terrestre, Maritimo

class Transporte {
    motor:number;
    marca:string;
    color:string;
    capacidad:number;
    constructor(motor:number, marca:string, color:string, capacidad:number) {
        this.motor = motor;
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
    }
}
// Hijo de la Clase Trnasporte , el cual tiene atributos propios de AVion

class Avion extends Transporte{
    elise:number;
    cola:number;
    constructor(motor, marca, color, capacidad, elise,cola){
        super(motor=motor,marca=marca,color=color,capacidad=capacidad);
        this.elise = elise;
        this.cola = cola;
    }
}
// Hijo de la Clase Trnasporte , el cual tiene atributos propios de AVion

class Terrestre extends Transporte{
    llantas:number;
    placa:string;
    constructor(motor:number, marca:string, color:string, capacidad:number, llantas:number,placa:string){
        super(motor=motor,marca=marca,color=color,capacidad=capacidad);
        this.llantas = llantas;
        this.placa = placa;
    }
}
// Hijo de la Clase Trnasporte , el cual tiene atributos propios de transporte maritimo

class Maritimo extends Transporte{
    turbinas:number;
    nombre:string;
    constructor(motor:number, marca:string, color:string, capacidad:number, turbinas:number,nombre:string){
        super(motor=motor,marca=marca,color=color,capacidad=capacidad);
        this.turbinas = turbinas;
        this.nombre = nombre;
    }
}

// asigna la funcion al select con el id tt
document.getElementById('tt').onchange = function(){
    transportett()
};

//function la cual me verifica el vehiculo que tengo asignado para poder mostrar la informacion
function transportett() {
    var tt = (<HTMLInputElement>document.getElementById('tt')).value;

    if (tt == 'bmw') {
        document.getElementById('motor').innerHTML = String(primer.motor);
        document.getElementById('marca').innerHTML = primer.marca;
        document.getElementById('color').innerHTML = primer.color;
        document.getElementById('capacidad').innerHTML = String(primer.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else if (tt == 'tanque') {
        document.getElementById('motor').innerHTML = String(prime.motor);
        document.getElementById('marca').innerHTML = prime.marca;
        document.getElementById('color').innerHTML = prime.color;
        document.getElementById('capacidad').innerHTML = String(prime.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else if (tt == 'artillero') {
        document.getElementById('motor').innerHTML = String(primer.motor);
        document.getElementById('marca').innerHTML = primer.marca;
        document.getElementById('color').innerHTML = primer.color;
        document.getElementById('capacidad').innerHTML = String(primer.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else {
        alert('No existe, gracias por confiar en nosotros');
    }
};
document.getElementById('tm').onchange = function(){
    transportetm()
};
function transportetm() {

    var tm = (<HTMLInputElement>document.getElementById('tm')).value;

    if (tm == 'submarino') {
        document.getElementById('motor').innerHTML = String(primerAgua.motor);
        document.getElementById('marca').innerHTML = primerAgua.marca;
        document.getElementById('color').innerHTML = primerAgua.color;
        document.getElementById('capacidad').innerHTML = String(primerAgua.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else if (tm == 'hidroavion') {
        document.getElementById('motor').innerHTML = String(primer.motor);
        document.getElementById('marca').innerHTML = primer.marca;
        document.getElementById('color').innerHTML = primer.color;
        document.getElementById('capacidad').innerHTML = String(primer.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else if (tm == 'lancha') {
        document.getElementById('motor').innerHTML = String(prime.motor);
        document.getElementById('marca').innerHTML = prime.marca;
        document.getElementById('color').innerHTML = prime.color;
        document.getElementById('capacidad').innerHTML = String(prime.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else {
        alert('Gracias');
    }
};
document.getElementById('tm').onchange = function(){
    transporteta()
};
function transporteta() {
    var ta = (<HTMLInputElement>document.getElementById('ta')).value;
    if (ta == 'comercial') {
        document.getElementById('motor').innerHTML = String(primerAgua.motor);
        document.getElementById('marca').innerHTML = primerAgua.marca;
        document.getElementById('color').innerHTML = primerAgua.color;
        document.getElementById('capacidad').innerHTML = String(primerAgua.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else if (ta == 'deluxe') {
        document.getElementById('motor').innerHTML = String(prime.motor);
        document.getElementById('marca').innerHTML = prime.marca;
        document.getElementById('color').innerHTML = prime.color;
        document.getElementById('capacidad').innerHTML = String(prime.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else if (ta == 'guerra') {
        document.getElementById('motor').innerHTML = String(prime.motor);
        document.getElementById('marca').innerHTML = prime.marca;
        document.getElementById('color').innerHTML = prime.color;
        document.getElementById('capacidad').innerHTML = String(prime.capacidad);
        document.getElementById('precio').innerHTML = String(500);
    } else {
        alert('No existe, gracias por confiar en nosotros');
    }
};