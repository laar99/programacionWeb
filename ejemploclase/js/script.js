// variables para hacer referencia a los elementos de la lista y boton
let eleUno = document.getElementById('elemento-uno');
let eleDos = document.getElementById('elemento-dos');
let eleTres = document.getElementById('elemento-tres');
let eleCuatro = document.getElementById('elemento-cuatro');
let eleCinco = document.getElementById('elemento-cinco');
let eleSeis = document.getElementById('elemento-seis');
let fondo = document.getElementById('contenedor');
let resetButton = document.getElementById('btn-reset');

// Funcion para el boton reset
let reset = function() {
  eleUno.style.width = ''
  eleDos .style.backgroundColor = ''
  eleTres.innerHTML = 'El mouse debe salir de la caja para cambiar el texto'
  eleCinco.style.display = "none"
  contenedor.style.backgroundColor = ''
};
resetButton.onclick = reset;
//resetButton.addEventListener('click',reset);

function incrementaAncho(){
  eleUno.style.width = '600px';
}

eleUno.addEventListener('mouseover', incrementaAncho);

function cambiaFondo(){
  eleDos.style.backgroundColor = 'green';
}

eleDos.addEventListener('mouseup', cambiaFondo);

function cambiaTexto(){
  eleTres.innerHTML = 'El mouse salio del elemento';
}

eleTres.addEventListener('mouseout', cambiaTexto);

function muestraElemento(){
  eleCinco.style.display = 'block';
}

eleCuatro.addEventListener('mousedown', muestraElemento);

function cambiarFondo2(){
	contenedor.style.backgroundColor = 'white';
}

eleSeis.addEventListener('mouseup', cambiarFondo2);