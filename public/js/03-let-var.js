'use strict'
//pruebas let y var 
 

// prueba con var
var numero =40;
console.log(numero);

if(true){
	var numero =50;
	console.log(numero);

}

console.log(numero);

//prueba con let

var texto ="curso JS PABLO";
console.log(texto);

if (true) {

let texto  = "curso laravel";
console.log(texto);

}
console.log(texto);


// switch

var edad= 18;
var imprime ="";
switch(edad){

 	case 18:
 		imprime = "acabas de cumplir la mayoria de edad";
 	break;
 	case 25:
 		imprime="ya es un adulto";
 	break;
 	case 40:
 		imprime="crisis de los cuarenta";
 	break;
 	case 75:
 		imprime="eres ya un anciano";
 	break;
 	default:
 	imprime ="tu edad es neutra";
 	break;
 }

 console.log(imprime);