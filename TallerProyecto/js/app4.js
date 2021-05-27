let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

b1.addEventListener('click', cambia);
b2.addEventListener('click', cambia1);
b3.addEventListener('click', cambia2);

img2.style.opacity = 0;
img4.style.opacity = 0;
img6.style.opacity = 0;

function cambia(){	
if (img2.style.opacity == 0) {	
	img2.style.opacity = 1;
	img1.style.opacity = 0;
}else{
	img2.style.opacity = 0;
	img1.style.opacity = 1;
}			
}

function cambia1(){			
	if (img4.style.opacity == 0) {	
	img4.style.opacity = 1;
	img3.style.opacity = 0;
}else{
	img4.style.opacity = 0;
	img3.style.opacity = 1;
}
}
function cambia2(){			
	if (img6.style.opacity == 0) {	
	img6.style.opacity = 1;
	img5.style.opacity = 0;
}else{
	img6.style.opacity = 0;
	img5.style.opacity = 1;
}
}