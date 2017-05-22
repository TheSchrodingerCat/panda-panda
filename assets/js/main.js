
function principal(){
	var arrFotos = ["assets/img/a1.jpg","assets/img/a2.jpg","assets/img/a3.jpg","assets/img/a4.jpg"];

	var fotos = document.getElementById("fotitos");

	//creamos divs para fotos
	arrFotos.forEach(function(element){
		var cajita = document.createElement("div");
		cajita.setAttribute("class","picture" + arrFotos.indexOf(element));
		cajita.setAttribute("id","div" + arrFotos.indexOf(element));

		var cajitaIn = document.createElement("div");
		cajitaIn.setAttribute("class","pictureIn" + arrFotos.indexOf(element));
		cajitaIn.setAttribute("id","divIn" + arrFotos.indexOf(element));

		var btnBorrar = document.createElement("button");
		btnBorrar.setAttribute("id","btn" + arrFotos.indexOf(element));
		var nameBotonBorrar = document.createTextNode("X");

		btnBorrar.appendChild(nameBotonBorrar);

		var cajitaDown = document.createElement("div");
		cajitaDown.setAttribute("class","pictureDown" + arrFotos.indexOf(element));
		cajitaDown.setAttribute("id","divDown" + arrFotos.indexOf(element));

		cajitaIn.appendChild(btnBorrar);
		cajita.appendChild(cajitaIn);
		cajita.appendChild(cajitaDown);
		fotos.appendChild(cajita);
	});

	//borrar fotos

	arrFotos.forEach(function(element){
		var clickear = document.getElementById("btn" + arrFotos.indexOf(element));
		var miDiv = document.getElementById("div" + arrFotos.indexOf(element));
		var miDivIn = document.getElementById("divIn" + arrFotos.indexOf(element));
		var miDivDown = document.getElementById("divDown" + arrFotos.indexOf(element));

		clickear.addEventListener("click",function(){
			miDiv.classList.remove("picture" + arrFotos.indexOf(element));
			miDivIn.classList.remove("pictureIn" + arrFotos.indexOf(element));
			miDivDown.classList.remove("pictureDown" + arrFotos.indexOf(element));
		})
	});
	

	//creamos botones
	var arrBotones = ["Origen","Extinción","Restaurar Fotos"];
	var botones = document.getElementById("botones");

	arrBotones.forEach(function(element){
		var btn = document.createElement("button");
		btn.setAttribute("class","boton");
		btn.setAttribute("id","boton" + arrBotones.indexOf(element));
		var nameBoton = document.createTextNode(element);

		btn.appendChild(nameBoton);
		botones.appendChild(btn);
	});

	//reponer fotos

	arrFotos.forEach(function(element){
		var clickear = document.getElementById("boton2");
		var miDiv = document.getElementById("div" + arrFotos.indexOf(element));
		var miDivIn = document.getElementById("divIn" + arrFotos.indexOf(element));
		var miDivDown = document.getElementById("divDown" + arrFotos.indexOf(element));

		clickear.addEventListener("click",function(){
			miDiv.classList.add("picture" + arrFotos.indexOf(element));
			miDivIn.classList.add("pictureIn" + arrFotos.indexOf(element));
			miDivDown.classList.add("pictureDown" + arrFotos.indexOf(element));
		})
	});


}
principal();