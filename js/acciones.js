// JavaScript Document
// acciones.js
$(document).ready(function(e) {
    //watchID se refiere a la aceleracion 'actual'
	//
	var watchID=null;
	document.addEventListener("deviceready", Dispositivo_Listo, false);
	//cuando esta listo el dipositivo
	//
	function Dispositivo_Listo(){
		Comienza();
	}
	//empieza la 'observacion' de la aceleracion
	//
	function Comienza(){
		var opciones={frequency:200};
		watchID=navigator.accelerometer.watchAcceleration(Correcto, Error, Opciones);
		navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
	}
	function Detente() { 
     if (watchID) { 
      navigator.accelerometer.clearWatch(watchID); 
      watchID = null; 

    }
}
function Correcto(acceleration) { 
var element = document.getElementById('acelerometro'); 
element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br/>' +
 'Aceleracion en Y: ' + acceleration.y + '<br/>' +
 'Aceleracion en Z: ' + acceleration.z + '<br/>' +
 'Intervalo: ' + acceleration.timestamp + '<br/>' 
} 
function Error(){
	alert('Error!')
}
function Localiza(posicion) { 
var element = document.getElementById('geolocalizacion');
 element.innerHTML = 'Latitude: '  + posicion.coords.latitude + '<br/>' + 
'Longitud: ' + posicion.coords.longitude  + '<br/>' + 
'Altitud: ' + posicion.coords.altitude + '<br/>' + 
'Precision: ' + posicion.coords.accuracy + '<br />' + 
'Precision de Altitud: ' + posicion.coords.altitudeAccuracy + '<br/>' + 
'Direccion: ' + posicion.coords.heading + '<br/>' + 
'Velocidad: ' + posicion.coords.speed + '<br/>' + 
'Intervalo: ' + posicion.timestamp + '<br/>'; 
} 
function ErrorLocalizacion(error){
	alert('codigo:' +error.code +'\n'+
	'mensaje:' +error.message + '\n');
}
});