//Ejercicio1 - Hallar   IVA 
let precioinicial = 100000;
let iva10 = 11;
let ivaresultado = precioinicial / iva10;
console.log("EL  IVA a pagar es:", ivaresultado);


const mostrarresultado =  document.getElementById('precioinicial');
const mostrarIVA = document.getElementById('ivaresultado');

mostrarresultado.textContent = precioinicial;
mostrarIVA.textContent = ivaresultado;
// ejercicio 2
let ladodelcuadrado = 40;
let areadelcuadrado = ladodelcuadrado * ladodelcuadrado;
let perimetrodelcuadrado = ladodelcuadrado *4;
console.log("EL  IVA a pagar es:", ivaresultado);


const lado =  document.getElementById('ladocuadrado');
const area = document.getElementById('areacuadrado');
const perimetro = document.getElementById('perimetrodelcuadrado');

//lado.textContent = "Lado:" + ladodelcuadrado;
//area.textContent = "El area es:" + areadelcuadrado;
//perimetro.textContent = "El perimetro es:" + perimetrodelcuadrado;

// Ejercicio 3
let UserName = prompt('What  is  your  name?');
alert('Hola ' + UserName);


// Ejercicio4 - promedio de 3  numeros  ingresados
let nume1 = prompt('Ingrese el  primer  numero')
let nume2 = prompt('Ingrese el  segundo  numero')
let nume3 = prompt('Ingrese el  tercer  numero')
let numeresultado  = (parseInt(nume1) + parseInt(nume2) + parseInt(nume3))/3

alert('El resultado es:' + numeresultado)

//Ejercicio 5 Litros porkm recorrido
let kmRecorrido = prompt('KILOMETROS RECORRIDSOS: ');
let litrosConsumidos = prompt('LITROS COMSUMIDOS: ');
let LitroPorKmRecorrido = litrosConsumidos / kmRecorrido;
alert('Cosumision: ' + LitroPorKmRecorrido +  'L/km.');

// Ejercicio 6 -  hora a segundos
// 1h = 60min - 1min = 60seg
// x * 60min = convierte a minutos
// y * 60min = convierte a segundos.
let horaInput = prompt('INGRESAR HORA: ');
let  horaToMinuto = horaInput * 60;
let minutoToSegundo = horaToMinuto *60;
//  alert(horaInput + 'hora es igual a ' + minutoToSegundo + 'segundos.')

// Ejercicio 7 - detector de unidades y decenas
//let numIngresado = prompt('INGRESAR NUMERO: ')
// let decenas = numIngresado / 10;
// let unidades = numIngresado % 10;
//alert('El nro ingresado  tiene ' + decenas + ' decenas./n' + unidades + ' unidades.');

//Ejercicio 8 - Calculo de porciones de tortillas
let porcionesSolicitadas =  prompt('INGRESAR NUMERO DE PORSIONES');
let patatasNecesariasGramos = 200 * porcionesSolicitadas;
let huevosNecesarios  = 1 * porcionesSolicitadas;
let cebollaNecesariaGramos = 60 *porcionesSolicitadas;
alert(
    'Se necesitaran ' + patatasNecesariasGramos + 'Kg  de patatas./n' +
    huevoNecesarios + ' huevos./n'
    cebollaNecesariaGramos + ' gramos de cebollas.'
);