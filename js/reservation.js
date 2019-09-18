//reservation
var Reservation = 
{
	form : document.getElementById("formulaire"),
	btn : document.getElementById("reserver"),
	canvas : document.getElementById("canvas-sig"),
	valider : document.getElementById("valider"),
	reserver : document.getElementById("reserver"),
	confirmer : document.getElementById("confirmer"),
	info : document.getElementById("info"),


	InitReservation : function()
	{
		this.reserver.addEventListener("click" , function()
		{
			Reservation.form.style.visibility = "visible";
			Reservation.reserver.style.display = "hidden";
			Reservation.canvas.style.visibility = "visible"

			var name = localStorage.getItem("nom");
		    document.getElementById("nom").value = name;

		    var firstname = localStorage.getItem("prenom");
		    document.getElementById("prenom").value = firstname;

		});

		// btn confirmer la reservation avec obligation de remplir les champs
	
		this.confirmer.addEventListener("click" , function() 
		{
		    if(document.getElementById("nom").value.length < 2)
		    {
		       	Reservation.info.style.display = "none";
		       	document.getElementById("msg2").style.display = "block";
		       	//scroll to message d'erreur
		       	window.location.href = "#msg2";

		    } else if (document.getElementById("prenom").value.length < 2) 
		    {
		       	Reservation.info.style.display = "none";
		       	document.getElementById("msg2").style.display = "block";
		       	window.location.href = "#msg2";
		  
		    } else if (Signature.estVide == true ) 
		    {
		    	document.getElementById("msg").style.display = "block";
		    	document.getElementById("msg2").style.display = "none";
		    	document.getElementById("signature").style.borderColor = "red";
		    	Reservation.info.style.display = "none";
		    	window.location.href = "#msg";
		    } else {
		           
		        Reservation.form.style.visibility = "hidden"; 
		        Reservation.reserver.style.visibility = "hidden";
		        document.getElementById("msg").style.display = "none";
		        document.getElementById("msg2").style.display = "none";
		        document.getElementById("signature").style.borderColor = "#80bfff";
		        Reservation.info.style.display = "block";

		        Chrono.initTimer();
		        Chrono.startTimer();
		        Chrono.updateTimer();

		        // info client et reservation
		        var name = document.getElementById("nom").value;                        
		        localStorage.setItem("nom" , name);

		        var firstname = document.getElementById("prenom").value;
		        localStorage.setItem("prenom" , firstname);

			    var stationReservee = document.getElementById("nomStation").textContent;
			    sessionStorage.setItem("nomStation", stationReservee);

		        // Afficher info reservation
			    document.getElementById("nomClient").textContent = localStorage.getItem("nom");
			    document.getElementById("prenomClient").textContent = localStorage.getItem("prenom");
			    document.getElementById("station").textContent = sessionStorage.getItem("nomStation");
		 
		        document.getElementById("canvas-sig").style.visibility = "hidden";
		        document.getElementById("reserver").style.visibility = "hidden";
		        document.getElementById("formulaire").style.visibility = "hidden"
		        document.getElementById("annulation").style.display = "block";

		        //scroll to timer
		        window.location.href = "#timer";
		    }
		});
	}
}
Reservation.InitReservation();