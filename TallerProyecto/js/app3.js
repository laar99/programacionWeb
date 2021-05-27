let cont1 = document.getElementById('cont1');
let cont4 = document.getElementById('cont4');
let cont5 = document.getElementById('cont5');
let hd = document.getElementById('hd');

let btn1 =document.getElementById('btn1');
let btn2 =document.getElementById('btn2');
let btn3 =document.getElementById('btn3');
let btn4 =document.getElementById('btn4');

cont4.style.display = 'none';
cont5.style.display = 'none';

btn1.addEventListener('click', cambia);
btn2.addEventListener('click', cambia);
btn3.addEventListener('click', cambia2);
btn4.addEventListener('click', cambia3);

function cambia(){		
	hd.style.display = 'block';
	cont4.style.display = 'none';
	cont5.style.display = 'none';
	cont1.style.display = '';
}
function cambia2(){		
	hd.style.display = 'none';
	cont1.style.display = 'none';	
	cont5.style.display = 'none';
	cont4.style.display = 'block';	
}

function cambia3(){		
	hd.style.display = 'none';
	cont1.style.display = 'none';	
	cont5.style.display = 'block';
	cont4.style.display = 'none';	
}