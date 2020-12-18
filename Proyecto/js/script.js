let  start = document.getElementById('inicio');
let principal = document.getElementById('prin');
let sig = document.getElementById('siguiente');
let atr = document.getElementById('atras');

function iniciar(){
	console.log(s);
     window.open('index-1.html', '_self');
}
function siguiente(){
	let rutaAbsoluta = self.location.href;   
		let ultimPosicion = rutaAbsoluta.lastIndexOf("-");
		let aux = rutaAbsoluta.substring( ultimPosicion + ".".length , rutaAbsoluta.length );
		let i = parseInt(aux.charAt(0),10)+1;
		let audio = document.getElementById('audio');	
	audio.play();
	   window.open('index-'+(i)+'.html','_self');	
}
function atras(){
	let rutaAbsoluta = self.location.href;   
		let ultimaPosicion = rutaAbsoluta.lastIndexOf("-");
		let aux = rutaAbsoluta.substring( ultimaPosicion + ".".length , rutaAbsoluta.length );
		let i = parseInt(aux.charAt(0),10);
		if (i==1) {
			window.open('index.html','_self');
		}else {
			window.open('index-'+(i-1)+'.html','_self');
		}
}
function prin(s){
	
    window.open('index.html', '_self');
}
function play(){
	let audio = document.getElementById('audio');	
	audio.play();
}
if (start==null) {
if (sig==null) {
 principal.addEventListener('click',prin);
 atr.addEventListener('click',atras);
}else{
	sig.addEventListener('click',siguiente);
	atr.addEventListener('click',atras);
}
}else{
	start.addEventListener('click',iniciar);
}