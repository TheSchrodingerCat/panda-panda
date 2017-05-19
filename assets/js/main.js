
function principal(){
	var arrFotos = ["assets/img/a1.jpg","assets/img/a2.jpg","assets/img/a3.jpg","assets/img/a4.jpg"]

	var fotos = document.getElementById("fotitos");

	//creamos divs
	arrFotos.forEach(function(element){
		var cajita = document.createElement("div");
		cajita.setAttribute("class","pictures");
		cajita.setAttribute("id","div" + arrFotos.indexOf(element));

		var fotito = document.createElement("img");
		fotito.setAttribute("class","pict");
		fotito.setAttribute("id","pict" + arrFotos.indexOf(element));
		fotito.setAttribute("src",element);



		cajita.appendChild(fotito);
		fotos.appendChild(cajita);
	});

}
principal();