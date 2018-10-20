
var juego = ""; 
var juego1= "";
var partida1="s"

while ((partida1==="s") &&  (juego=prompt('Piedra - Papel o Tijera (PI-PA-TI)'))){
	
	juego1=juego.toLowerCase()
	var res = Math.floor( Math.random() * 3 )
	
		if (res===0){
	        var cpu = "pi";
	        alert("El CPU Eligio PIEDRA");
		    }else if (res===1){
				 	var cpu = "pa";
				 	alert("El CPU Eligio PAPEL");
			}else {
					var cpu = "ti";
					alert("El CPU Eligio TIJERA");
			}

		if (juego1==="pa" && cpu==="pi"){
					alert ( "Has Ganado");
			}else if (juego1==="ti" && cpu==="pa"){
					alert ( "Has Ganado");
			}else if (juego1==="pi" && cpu==="ti"){
					alert ( "Has Ganado");
			}else if (juego1==="ti" && cpu==="ti"){
					alert ("Empate");
			}else if (juego1==="pa" && cpu==="pa"){
					alert ("Empate");
			}else if (juego1==="pi" && cpu==="pi"){
					alert ("Empate");
				}else {alert ("Perdiste !!!")}

	var partida=prompt("Quieres seguir juagando S/N")
	partida1=partida.toLowerCase()

} 

console.log("----------------------------")
