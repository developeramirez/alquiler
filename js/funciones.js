// objeto transporte terrestre
const primerTransporte = {
        motor: 1200,
        marca: 'freefire',
        color: 'verde',
        capacidad: 4,
        precio: 1300
    }
    // objeto transporte terrestre
const primer = {
        motor: 200,
        marca: 'bmw',
        color: 'rojo',
        capacidad: 20,
        precio: 300
    }
    // objeto transporte acuatico

const primerAgua = {
    motor: 1500,
    marca: 'freefire',
    color: 'blanco',
    capacidad: 8,
    precio: 2000
}

// clase Padre, de la cual heredaran los hijos, avion, terrestre, Maritimo
class Transporte {
    constructor(motor, marca, color, capacidad) {
        this.motor = motor;
        this.marca = marca;
        this.color = color;
        this.capacidad = capaciad;
    }
}
// Hijo de la Clase Trnasporte , el cual tiene atributos propios de AVion
class Avion extends Transporte {
    constructor(motor, marca, color, capacidad, elise, cola) {
        super(motor = motor, marca = marca, color = color, capacidad = capacidad);
        this.elise = elise;
        this.cola = cola;
    }
}
// Hijo de la Clase Transporte , el cual tiene atributos propios de vehiculos terrestres
class Terrestre extends Transporte {
    constructor(motor, marca, color, capacidad, llantas, placa) {
        super(motor = motor, marca = marca, color = color, capacidad = capacidad);
        this.llantas = llantas;
        this.placa = placa;
    }
}
// Hijo de la Clase Trnasporte , el cual tiene atributos propios de transporte maritimo
class Maritimo extends Transporte {
    constructor(motor, marca, color, capacidad, turbinas, nombre) {
        super(motor = motor, marca = marca, color = color, capacidad = capacidad);
        this.turbinas = turbinas;
        this.nombre = nombre;
    }
}


// funcion la cual captura el tipo de transporte qeu se solicita
$('#tt').on('change', function() {
    var tt = $('#tt').val();

    if (tt == 'bmw') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else if (tt == 'tanque') {
        document.getElementById('motor').value = primerTransporte.motor;
        document.getElementById('marca').value = primerTransporte.marca;
        document.getElementById('color').value = primerTransporte.color;
        document.getElementById('capacidad').value = primerTransporte.capacidad;
        document.getElementById('precio').value = 500;
    } else if (tt == 'artillero') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else {
        alert('No existe, gracias por confiar en nosotros');
    }
});
// funcion la cual verifica la lista de transporte maritmo acorde a lo que el usuario selecciono,
// para brindar la informacion que el usuario desea
$('#tm').on('change', function() {

    var tm = $('#tm').val();

    if (tm == 'submarino') {
        document.getElementById('motor').value = primerAgua.motor;
        document.getElementById('marca').value = primerAgua.marca;
        document.getElementById('color').value = primerAgua.color;
        document.getElementById('capacidad').value = primerAgua.capacidad;
        document.getElementById('precio').value = 1500;
    } else if (tm == 'hidroavion') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else if (tm == 'lancha') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else {
        alert('Gracias');
    }
});

// funcion la cual verifica la lista de transporte aereo acorde a lo que el usuario selecciono,
// para brindar la informacion que el usuario desea
$('#ta').on('change', function() {
    var ta = $('#ta').val();
    if (ta == 'comercial') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else if (ta == 'deluxe') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else if (ta == 'guerra') {
        document.getElementById('motor').value = primer.motor;
        document.getElementById('marca').value = primer.marca;
        document.getElementById('color').value = primer.color;
        document.getElementById('capacidad').value = primer.capacidad;
        document.getElementById('precio').value = 500;
    } else {
        alert('No existe, gracias por confiar en nosotros');
    }
});