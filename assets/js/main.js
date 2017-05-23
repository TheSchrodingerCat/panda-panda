
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
		btnBorrar.setAttribute("class","botoncito" + arrFotos.indexOf(element));
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

	//parrafos
		var p1 = document.getElementById("parrafos1");
		var p2 = document.getElementById("parrafos2");
		
		
		var text1P1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nisi ea delectus explicabo repudiandae repellat facere, earum rerum atque iste ullam, quos dignissimos corporis velit ipsa ad, reiciendis consequatur distinctio.");

		var text2P1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet architecto libero animi veniam possimus iure dolorum placeat officia sit vero, hic blanditiis aliquid magni dolorem voluptates delectus quia nemo perferendis.");

		var text1P2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio placeat odit quam omnis tempore aliquid. Nam officiis odit eum reprehenderit eos, tempore, cumque perferendis delectus, quibusdam non voluptatum odio neque!");

		var text2P2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo placeat impedit in modi optio tempore magnam quibusdam molestias fugit asperiores sed nisi perspiciatis voluptatum ducimus veritatis, ad id ullam! Et.");

		p1.appendChild(text1P1);
		p1.appendChild(document.createElement("br"));
		p1.appendChild(document.createElement("br"));
		p1.appendChild(text2P1);
		p2.appendChild(text1P2);
		p2.appendChild(document.createElement("br"));
		p2.appendChild(document.createElement("br"));
		p2.appendChild(text2P2);

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
			clickear.classList.toggle("nothing");
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
		var botonX = document.getElementById("btn" + arrFotos.indexOf(element));

		clickear.addEventListener("click",function(){
			miDiv.classList.add("picture" + arrFotos.indexOf(element));
			miDivIn.classList.add("pictureIn" + arrFotos.indexOf(element));
			miDivDown.classList.add("pictureDown" + arrFotos.indexOf(element));
			botonX.classList.toggle("nothing");
		});
	});

	//eliminar y reponer párrafos

	var clickearOrigen = document.getElementById("boton0");
	var clickearExtincion = document.getElementById("boton1");	

	clickearOrigen.addEventListener("click",function(){
			p1.classList.toggle("nothing");
		});

	clickearExtincion.addEventListener("click",function(){
			p2.classList.toggle("nothing");
		});


}
principal();