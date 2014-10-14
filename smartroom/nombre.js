function info(){
if(typeof(Storage)!=="undefined") 
 { 
 if(localStorage.fname){
	document.getElementById("info").innerHTML="Informacion: Hola " + 
	localStorage.fname + ": Bienvenido a Smartroom";
 } 
else{
	document.getElementById("info").innerHTML="Informacion:";
}
}
 
else 
 { 
 document.getElementById("info").innerHTML="Informacion: Tu navegador no soporta localStorage"; 
 }
 }
 addEventListener('load', info);