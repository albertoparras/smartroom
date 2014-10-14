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
if(localStorage.pais && localStorage.ciudad && localStorage.gpshow){
	document.getElementById('pais').innerHTML=" "+localStorage.pais;
	document.getElementById('ciu').innerHTML=" "+localStorage.ciudad;
	document.getElementById('locali').innerHTML=" "+localStorage.gpshow;
}
else{
	document.getElementById('pais').innerHTML="";
	document.getElementById('ciu').innerHTML="";
	document.getElementById('locali').innerHTML="";
}
var tabla="tabla";
for(i=0;i<6;i++){
if(localStorage.check[i]=="0"){
tabla+=i;
var child = document.getElementById(tabla);
child.parentNode.removeChild(child);
tabla="tabla";
}}
}
 
else 
 { 
 document.getElementById("info").innerHTML="Informacion: Tu navegador no soporta localStorage"; 
 }
 }
 addEventListener('load', info);