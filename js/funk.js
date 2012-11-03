// JavaScript Document

	$(document).ready(function(e) {
		// readFiles();		
        document.addEventListener("pause", function(){//Al pausar la aplicaci�n
			eventHistory('La aplicaci&oacute;n se paus&oacute;');
		}, false);
		document.addEventListener("resume", function(){//Al volver a la aplicaci�n
			historyEvent('La aplicaci&oacute;n se reinici&oacute;');
		}, false);	
	});// document ready
	
function eventHistory(action){
	writeFiles(action);
	$('#historia').append('<li>'+action+'</li>');	
}	

function historyEvent(action){
	 readFiles();
	navigator.notification.confirm(action, function(boton){
					switch(boton){
						case 1:
							navigator.notification.beep(1);
							break;
						case 2:
							navigator.notification.vibrate(500);
							break;						
					}
					},"Preactica 1","Beep,Vibrar,Cancelar");	
}	



function writeFiles(content){
	//var content = $('#fileContent').val();
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		fileSystem.root.getFile('log.txt', { create: true }, function(archivo){
			archivo.createWriter(function(escritor){
				escritor.onwrite = function(e){
					pgAlert("El archivo fue escrito Correctamente!");
				};
				escritor.write(content);
			}, function(){
				pgAlert("No existe el archivo, agrega contenido y luego presiona en Escribir");
			});
		}, function(err){
			pgAlert("No se pudo acceder al sistema de archivos");
		});
	}, function(err){
		pgAlert("No se pudo acceder al sistema de archivos");
	});
}

function readFiles(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		fileSystem.root.getFile('log.txt', null, function(archivo){
			archivo.file(function(archivo){
				var lector = new FileReader();
				lector.onloadend = function(e){
					alert(e.target.result);
				}
				//alert (lector.readAsText(file));
				alert ('Funciono XD')
			}, function(){
				pgAlert("No existe el archivo, agrega contenido y luego presiona en Escribir");
			});
		},
		function(err){
			pgAlert("No se pudo acceder al sistema de archivos");
		});
	},
	function(err){
		pgAlert("No se pudo acceder al sistema de archivos");
	});
}


