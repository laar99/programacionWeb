let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');

let mostrar =true;

p1.style.display = 'none';
p2.style.display = 'none';
p3.style.display = 'none';

li1.addEventListener('click', camb);
li2.addEventListener('click', camb2);
li3.addEventListener('click', camb3);

function camb(){
	if (mostrar==true) 
	{
		li1.style.backgroundColor = 'white';
		p1.style.display = 'block';
		mostrar = false;
	}else if (mostrar==false) 
	{
		li1.style.backgroundColor = '';
		p1.style.display = 'none';
		mostrar = true;
	}
	
}

function camb2(){
	if (mostrar==true) 
	{
		li2.style.backgroundColor = 'white';
		p2.style.display = 'block';
		mostrar = false;
	}else if (mostrar==false) 
	{
		li2.style.backgroundColor = '';
		p2.style.display = 'none';
		mostrar = true;
	}
}

function camb3(){
	if (mostrar==true) 
	{
		li3.style.backgroundColor = 'white';
		p3.style.display = 'block';
		mostrar = false;
	}else if (mostrar==false) 
	{
		li3.style.backgroundColor = '';
		p3.style.display = 'none';
		mostrar = true;
	}
}

/*function camb(v){	

if (v == 'l1') {
	li1.style.backgroundColor = 'red';
	p1.style.display = 'block';

}else if (v == 'l2') {
	li2.style.backgroundColor = 'red';
	p2.style.display = 'block';

}else if(v == li3){
	li3.style.backgroundColor = 'red';
	p3.style.display = 'block';

}
}*/

