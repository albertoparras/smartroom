var errgps;
var errpai;
var errpass;
var errdif;
var errciu;
var gpsapi;
var gpsgrad;
var checks = ["111111"];
function validar(tipo){
switch(tipo){
case 1:
if(gpscheck() == 0)
{
	var err = document.getElementById('coorde');
	err.setCustomValidity('Formato de Coordenadas erróneas');
	err.style.background= "#FFDDDD";
	errgps = 1;
}
else{
	var err = document.getElementById('coorde');
	err.setCustomValidity('');
	err.style.background= "DDFFDD";
	errgps=0;
}
break;
case 2:
if(paischeck()==0){
	var err = document.getElementById('paiss');
	err.setCustomValidity('País erroneo');
	err.style.background= "#FFDDDD";
	errpai=1;
}
else{
	
	var err = document.getElementById('paiss');
	err.setCustomValidity('');
	err.style.background= "DDFFDD";
	errpai=0;
}
break;
case 3:
if(passcheck() == 0)
{
	var err = document.getElementById('pass');
	err.setCustomValidity('Contraseña Demasiado Corta');
	errpass=1;
}
else{
	var err = document.getElementById('pass');
	err.setCustomValidity('');
	errpass=0;
}
break;
case 4:
if(difcheck() == 0)
{
	var err = document.getElementById('dif');
	err.setCustomValidity('Intervalo erróneo');
	errdif=1;
}
else{
	var err = document.getElementById('dif');
	err.setCustomValidity('');
	errdif=0;
}
break;
case 5:
if(errgps==0&&errpai==0&&errpass==0&&errdif==0&&errciu==0){
	localStorage.setItem("gps", gpsapi);
	localStorage.setItem("gpshow",gpsgrad);
	localStorage.setItem("check",checks);
	var pais = document.getElementById('paiss').value;
	localStorage.setItem("pais",pais);
	var ciudad = document.getElementById('ciudad').value;
	localStorage.setItem("ciudad",ciudad);
	var pass = document.getElementById('pass').value;
	localStorage.setItem("password",pass);
	var dif = document.getElementById('dif').value;
	localStorage.setItem("temperatura",dif);
	document.getElementById('formulario').submit();
}
else{
	var mensaje="";
	if(errpai!=0){
		mensaje+="Introduce un País Correcto\n";
		}
	if(errciu!=0){
		mensaje+="Introduce una Ciudad\n";
		}
	if(errgps!=0){
		mensaje+="Introduce una Coordenada Correcta\n";
		}
	if(errpass!=0){
		mensaje+="Introduce una Contraseña Correcta\n";
		 }
	if(errdif!=0){
		mensaje+="Introduce una Diferencia Correcta\n";
		}
	alert(mensaje);
	return false;
}
break;
case 6:
	var ciud = document.getElementById('ciudad').value;
	if(ciud == ""){
		var err = document.getElementById('ciudad');
		err.setCustomValidity('Ciudad erronea');
		err.style.background= "#FFDDDD";
		errciu=1;
		}
	else{
		var err = document.getElementById('ciudad');
		err.setCustomValidity('');
		err.style.background= "DDFFDD";
		errciu=0;
		}
}
}
function gpscheck(){
var gps = document.getElementById('coorde').value;
var pattso=/^(N|S)\s[0-9-]+º\s[0-9]+'\s[0-9]+",\s(E|O)\s[0-9-]+º\s[0-9]+'\s[0-9]+"$/g;
var pattdeci = /^[0-9.-]+,\+|-[0-9.-]+$/g;
if (pattso.test(gps) == true) { //Conversion formato decimal
	var res = gps.split(",");
	//Norte-Sur
	var ns = res[0].split("");
	if(ns[0] == 'N'){
		gpsapi="+";}
	else{
		gpsapi="-";}
	var snesp = res[0].split(" ");
	var grad = snesp[1].split("?");
	tot = parseInt(grad[0]);
	var min = snesp[2].split("'");
	var minu = parseInt(min[0]);
	minu = minu/60;
	tot+=minu;
	var seg = snesp[3].split('"');
	segu = parseInt(seg[0]);
	segu = segu/3600;
	tot+=segu
	gpsapi+=tot+",";
	//Este-Oeste
	var ns = res[1].split("");
	if(ns[0] == 'E'){
		gpsapi+="+";}
	else{
		gpsapi+="-";}
	var snesp = res[1].split(" ");
	var grad = snesp[2].split("?");
	tot = parseInt(grad[0]);
	var min = snesp[3].split("'");
	var minu = parseInt(min[0]);
	minu = minu/60;
	tot+=minu;
	var seg = snesp[4].split('"');
	segu = parseInt(seg[0]);
	segu = segu/3600;
	tot+=segu;
	gpsapi+=tot;
	gpsgrad=gps;
	return 1;
}
else if(pattdeci.test(gps) == true){
	var res = gps.split(",");
	//Norte-Sur
	var ns = res[0].split("");
	if(ns[0] == '+'){
		gpsgrad="N ";}
	else{
		gpsgrad="S ";}
	var snp = res[0].split(".");
	snp[0]=snp[0].substr(1);
	gpsgrad+=snp[0]+"º ";
	snp[1]="0."+snp[1];
	var min = parseFloat(snp[1]);
	min = min*60;
	mins = String(min).split(".");
	gpsgrad+=mins[0]+"' ";
	mins[1]="0."+mins[1];
	var seg = parseFloat(mins[1]);
	seg = seg*60;
	seg = seg.toFixed(2);
	gpsgrad+=seg+'", ';
	//Este-Oeste
	var ns = res[1].split("");
	if(ns[0] == '+'){
		gpsgrad+="E ";}
	else{
		gpsgrad+="O ";}
	var snp = res[1].split(".");
	snp[0]=snp[0].substr(1);
	gpsgrad+=snp[0]+"º ";
	snp[1]="0."+snp[1];
	var min = parseFloat(snp[1]);
	min = min*60;
	mins = String(min).split(".");
	gpsgrad+=mins[0]+"' ";
	mins[1]="0."+mins[1];
	var seg = parseFloat(mins[1]);
	seg = seg*60;
	seg = seg.toFixed(2);
	gpsgrad+=seg+'"';
	gpsapi=gps;
	return 1;
}
else{
	return 0;
}
}


function paischeck(){
var pais = document.getElementById('paiss').value;
var paiss = new Array ("España","Francia","Alemania","Italia","Reindo Unido","Portugal","Noruega","Suecia");
if(pais == "Cataluña"){
	confirm("Sabe usted que Cataluña no es un país? Pues no diga tonterias");
	return 0;
}
else{
	for(var i=0;i<=7;i++){
		if(pais == paiss[i]){
		return 1;
		}
	}
	return 0;
}
}

function passcheck(){
var pass = document.getElementById('pass').value.length;
if(pass <= 4){
	document.getElementById('mensajes').innerHTML='Password: Corta';
	document.getElementById('pass').style.background="#FFDDDD";
	return 0;}
else if(pass > 4 && pass <= 6){
	document.getElementById('mensajes').innerHTML='Password: Débil';
	document.getElementById('pass').style.background="#FFDDDD";
	return 1;}
else if(pass > 6 && pass <= 8){
	document.getElementById('mensajes').innerHTML='Password: Medio';
	document.getElementById('pass').style.background="#FFFFDD";
	return 1;}
else if(pass > 8){
	document.getElementById('mensajes').innerHTML='Password: Fuerte';
	document.getElementById('pass').style.background="#DDFFDD";
	return 1;}
}

function difcheck(){
var valor = document.getElementById("dif").value;
valorN = parseInt(valor);
if(valor == "NaN"){
	document.getElementById('dif').style.color="#FF0000";
	document.getElementById('dif').innerHTML="Intervalo Erróneo";
	return 0;
}
else if(valorN<=25){
	document.getElementById('dif').style.color="#FF0000";
	document.getElementById('dif').innerHTML="Intervalo Erróneo: "+ valorN;
	return 0;
}
else if(valorN>=29){
	document.getElementById('dif').style.color="#FF0000";
	document.getElementById('dif').innerHTML="Intervalo Erróneo: "+valorN;
	return 0;
}
else{
	var valor = document.getElementById("dif").value;
	document.getElementById('dif').innerHTML=valor;
	document.getElementById('dif').style.color="00FF00";
	return 1;
}
}
function resete (){
 	document.getElementById("botton2").className = "btn btn-lg btn-danger";
	document.getElementById("botton2").innerHTML = "Borrar Datos";
	document.getElementById("botton").className = "btn btn-lg btn-default";
	document.getElementById("botton").innerHTML = "Enviar Datos";
	location.reload();
 }
function borrar (){
	localStorage.removeItem('temperatura');
	localStorage.removeItem('gps');
	localStorage.removeItem('pais');
	localStorage.removeItem('password');
	localStorage.removeItem('gpshow');
	localStorage.removeItem('ciudad');
	document.getElementById("botton2").className = "btn btn-lg btn-warning";
	document.getElementById("botton2").innerHTML = "Datos Borrados";
	setTimeout(resete,1500);
}
function color(number){
var select="intereses"+number;
var check = document.getElementById(select).checked;
select+=number;
if(check==true){
checks[number]="1";
document.getElementById(select).className="label label-info";
}
else{
checks[number]="0";
document.getElementById(select).className="label label-default";
}
}