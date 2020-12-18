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

img2.style.display = 'none';
img4.style.display = 'none';
img6.style.display = 'none';

function cambia(){	
if (img2.style.display == 'none') {	
	img2.style.display = 'block';
	img1.style.display = 'none';
}else{
	img2.style.display = 'none';
	img1.style.display = 'block';
}			
}

function cambia1(){			
	if (img4.style.display == 'none') {	
	img4.style.display = 'block';
	img3.style.display = 'none';
}else{
	img4.style.display = 'none';
	img3.style.display = 'block';
}
}
function cambia2(){			
	if (img6.style.display == 'none') {	
	img6.style.display = 'block';
	img5.style.display = 'none';
}else{
	img6.style.display = 'none';
	img5.style.display = 'block';
}
}