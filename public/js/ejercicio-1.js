'use strict'
/*programa que pida dos numeros y que nos diga cual es el mayor y el menor y si son iguales*/
var numero1 = parseInt(prompt ('Introduce el primer numero', 0));
var numero2 = parseInt(prompt ('Introduce el segundo numero', 0));
 if (numero1 == numero2) {
 	alert ("los numeros son iguales");
 }else if(numero1 > numero2){
 	alert("el numero mayor es: "+numero1);
 	alert("el numero menor es: "+numero2);
 }else if(numero2 > numero1){
 	alert("el numero mayor es: "+numero2);
 	alert("el numero menor es: "+numero1);
 }else{
 	alert("ingrese numeros correctos");
 }