'use strict'

/*utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado*/
var suma =0;
var contador= 0;
var numero = parseInt(prompt('Introduce un numero no negativo',0));

while (numero >= 0) {
	
	if(isNaN(numero)) {
		numero=0;
	}else if(numero >= 0) {
		suma =suma + numero;
		contador++;
	}
	numero = parseInt(prompt('Introduce un numero no negativo',0));
}

alert("la suma es: "+suma);
alert("la media es: "+(suma/contador)) ;