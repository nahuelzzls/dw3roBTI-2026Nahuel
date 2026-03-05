function calcularEdad(){

let nacimiento = new Date(document.getElementById("fecha").value);

let hoy = new Date();

let años = hoy.getFullYear() - nacimiento.getFullYear();

let meses = hoy.getMonth() - nacimiento.getMonth();

if(meses < 0){
    años--;
    meses += 12;
}

document.getElementById("resultado").innerHTML =
"You are <b>" + años + " years " + meses + " months</b> old";
}