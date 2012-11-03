// JavaScript Document

	$(document).ready(function(e) {
        document.addEventListener("pause", function(){//Al pausar la aplicaci�n
			eventHistory('La aplicaci&oacute;n se paus&oacute;');
		}, false);
		document.addEventListener("resume", function(){//Al volver a la aplicaci�n
			eventHistory('La aplicaci&oacute;n se reinici&oacute;');
		}, false);
		document.addEventListener("online", function(){//Al conectarse a la red
			eventHistory('La aplicaci&oacute;n se ha conectado');
		}, false);
		document.addEventListener("offline", function(){//Al desconectarse de la red
			eventHistory('La aplicaci&oacute;n se ha desconectado');
		}, false);
	});// document ready
	
function eventHistory(action){
	$('#historia').append('<li>'+action+'</li>');
}	