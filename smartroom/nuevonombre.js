function iniciar(){
var save = document.getElementById('botton');
save.addEventListener('click',guardar);
var dele = document.getElementById('botton2');
dele.addEventListener('click',borrar);
}
function borrar (){
if(typeof(Storage)!=="undefined") 
 { 
	localStorage.removeItem('fname');
	localStorage.removeItem('email');
	document.getElementById("botton2").className = "btn btn-lg btn-warning";
	document.getElementById("botton2").innerHTML = "Datos Borrados";
	setTimeout(resete,1500);
 }
  else 
 { 
 document.getElementById("botton").innerHTML="Tu navegador no soporta localStorage"; 
 }
}
function guardar(){
if(typeof(Storage)!=="undefined") 
 { 
	var nombre = document.getElementById('nombre').value;
	var email = document.getElementById('email').value;
	var fname = "fname";
	localStorage.setItem(fname, nombre);
	if(validaremail(email)==0 || validar_reg(email)==0){
	var str='Email erróneo';
	document.getElementById('errores').style.color="red";
	document.getElementById('errores').value= str;
	return false;}
	else{
	localStorage.setItem("email",email);
	}
	document.getElementById("botton").className = "btn btn-lg btn-success";
	document.getElementById("botton").innerHTML = "Datos Guardados";
	setTimeout(resete,1500);
 }
 else 
 { 
 document.getElementById("botton").innerHTML="Tu navegador no soporta localStorage"; 
 }
}
function resete (){
 	document.getElementById("botton2").className = "btn btn-lg btn-danger";
	document.getElementById("botton2").innerHTML = "Borrar Datos";
	document.getElementById("botton").className = "btn btn-lg btn-default";
	document.getElementById("botton").innerHTML = "Enviar Datos";
	location.reload();
 }
 function validar_reg(pemail){
 var patemail=/^[A-Za-z0-9._%+-]+@[a-zA-Z]+(\.([a-zA-Z0]+))*$/g;
 if(patemail.test(pemail)==true){
 return 1;}
 else{
 return 0;}
 }
 function validaremail(pemail){
 var lastAtPos = pemail.lastIndexOf('@');
 var lastDotPos = pemail.lastIndexOf('.');
 return (lastAtPos < lastDotPos && lastAtPos > 0 && pemail.indexOf('@@') == -1 && lastDotPos > 2 && (pemail.length - lastDotPos) > 2);
}
addEventListener('load', iniciar);