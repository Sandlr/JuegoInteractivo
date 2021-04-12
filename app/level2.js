window.addEventListener('load', () => {
	initModalEvents ();
});



function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	console.log(ev.target);
	ev.target.appendChild(document.getElementById(data));
	ev.target.children[0].style.margin = "0";
	ev.target.children[0].style.scale = ".78"; //escalar objeto arrastrado a la caja contenedora 
	
	testing();

}

function testing() {
	var correcto = 1;
	var pokes = document.getElementsByClassName("craneo");
	for (var i = 0; i < pokes.length; i++) {
		if (pokes[i].getAttribute("name") != pokes[i].parentNode.getAttribute("id")) {
			correcto = correcto * 0;
			break;
		}
	}
	if (correcto == 1) {
		document.getElementById("resultado").innerHTML = "CORRECTO";
				
		
	} else {
		document.getElementById("resultado").innerHTML = "INCOMPLETO";
	}

}


//cronómetro

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

inicio();

function inicio() {
	control = setInterval(cronometro, 10);
	
}
function parar() {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio() {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro() {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0" + centesimas }
		Centesimas.innerHTML = ":" + centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos++;
		if (segundos < 10) { segundos = "0" + segundos }
		Segundos.innerHTML = ":" + segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ((centesimas == 0) && (segundos == 0)) {
		minutos++;
		if (minutos < 10) { minutos = "0" + minutos }
		Minutos.innerHTML = ":" + minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
		horas++;
		if (horas < 10) { horas = "0" + horas }
		Horas.innerHTML = horas;
	}
}

//Ventana emergente

const initModalEvents = () => {
	const toggle = document.querySelector('.listo a');

	const modalPop = document.querySelector('.modal_pop');

	toggle.addEventListener('click', (ev) => {

		ev.preventDefault();

		modalPop.classList.add('opened');

	});
};


