
// Variable que alacenará el objeto de geolocalización
var miUbicacion = navigator.geolocation;

function initGPS(){
	// Botón para obtener la ubicación
	var btn_localizar = document.querySelector('#localizar');
	
	// Asignación del método a ejecutar cuando se observe el clic del botón
	btn_localizar.addEventListener('click', () => {
		if (miUbicacion) {
			miUbicacion.getCurrentPosition(getPosition, errorPosition);
			// console.log('Browser SI soporta la API de geolocalización');
		} else {
			console.log('Browser NO soporta la API de geolocalización');
		}
	});
}

// Función que se ejecutará si es posible correr la API
function getPosition(posicion) {

	// Referenciación hacia elementos del DOM
	var view_latitud = document.querySelector('#latitud');
	var view_longitud = document.querySelector('#longitud');
	var view_tiempo = document.querySelector('#time');
	var view_presicion = document.querySelector('#presicion');

	// Obtención de la fecha y hora en la cual se está obteniendo la ubicación
	var time = new Date(posicion.timestamp);

	// Obtención de la presición en metros de la ubicación
	var api_presicion = posicion.coords.accuracy;

	// Variable que guerdará en un objeto JSON las opciones de la latitud y longitud
	var locacion = {
		latitud : posicion.coords.latitude,
		longitud : posicion.coords.longitude
	};

	// Interpolación de información en elementos del DOM
	view_latitud.innerHTML = `Latitud: ${locacion.latitud}`;
	view_longitud.innerHTML = `Longitud: ${locacion.longitud}`;
	view_tiempo.innerHTML = `Tiempo de ubicación: ${time}`;
	view_presicion.innerHTML =`Presición de la ubicación: ${api_presicion} metros`;
}

// Función que se ejecutará si NO es posible obtener la ubicación
function errorPosition(error) {
	var view_error = document.querySelector('.section1');

	var codigoError = error.code;
	
	switch(codigoError){
		case error.PERMISSION_DENIED:
			view_error.innerHTML = 'Permiso denegado por el usuario';
			break;
			case error.POSITION_UNAVAILABLE:
			view_error.innerHTML = 'Posición no disponible';
			break;
			case error.TIMEOUT:
			view_error.innerHTML = 'Tiempo de espera agotado';
			break;
		default:
			alert('Error de Geolocalización desconocido :' + error.code);
	}

	console.log(`El código de error es: ${codigoError}`);
}

window.onload = initGPS(); 