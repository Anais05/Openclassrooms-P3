//map
var Carte = 
{

	initCarte : function() 
	{
		var map = L.map("map").setView([45.74846, 4.84671], 16);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		}).addTo(map);

		// JcDecaux
		ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=93e840add94d8f357fbb95535346bf87a91cb5e0', function(reponse) 
		{
		   	var stations = JSON.parse(reponse);	

		    stations.forEach(function(elements) 
		    {
		    	var station = 
		    	{
		    		nom : elements.name,
		    		adresse : elements.address,
		    		velos : elements.available_bikes,
		    		places: elements.available_bike_stands,
		    		statut : elements.status,
		    		latitude : elements.position.lat,
		    		longitude : elements.position.lng,
		    	}

		    	//personnalisation  icones 

		    	var veloIcone = L.Icon.extend(
		    	{
                    options:{
                             iconSize: [40, 40], 
                            }
                });
            
                var iconeVert = new veloIcone({iconUrl: 'p3-image/icone_vert.png'}),
                    iconeRouge = new veloIcone({iconUrl: 'p3-image/icone_rouge.png'}),
                    iconeNoir = new veloIcone({iconUrl: 'p3-image/icone_noir.png'});

                //affichage icone selon etat des stations 

                var iconeAffichage = ""
               
				if(station.statut === "CLOSED") 
				{
					iconeAffichage = iconeNoir;
				} else {
					if(station.velos < 4) {
						iconeAffichage = iconeRouge;
					} else {
						iconeAffichage = iconeVert;
					}
				}

		   		var marker = L.marker([station.latitude, station.longitude], {icon: iconeAffichage}).addTo(map);

            // AFFIHAGE INFO FORMULAIRE ET CANVAS 

		   		var afficheStation = document.getElementById("action");
		   		
		   		marker.addEventListener("click", function(e) 
		   		{	
		   			document.getElementById("reserver").style.visibility = "visible";		     
				   action.innerHTML = "";

				   var stationNom = document.createElement("h2")
				   var stationAdresse = document.createElement("p");
				   var stationStatut = document.createElement("p");
			       var stationNbVelo = document.createElement("p");
				   var stationNbPlace = document.createElement("p");

				   stationNom.id = "nomStation";
				   stationNbVelo.id = "nbDeVelo";
				   
                
				    if(station.statut === "CLOSED") 
				    {
					    stationStatut.id = "ferme";
					    stationStatut.textContent = "Station fermée";
				    }  else {
					    stationStatut.id = "ouvert";
					    stationStatut.textContent = "Station ouverte";
					}

					stationNom.textContent = station.nom;

					stationAdresse.textContent = station.adresse;
					stationNbVelo.textContent = "Nombre de vélos disponibles : " + station.velos;
					stationNbPlace.textContent = "Nombre de places disponibles : " + station.places;
					
                    action.appendChild(stationNom);
					action.appendChild(stationAdresse);
					action.appendChild(stationStatut);
					action.appendChild(stationNbVelo);
					action.appendChild(stationNbPlace);


					if (station.statut === "CLOSED") 
					{						
						document.getElementById("reserver").style.display = "none";
					} else if (station.velos === 0) 
					{						
						document.getElementById("reserver").style.display = "none";
					}else {
						document.getElementById("reserver").style.display = "block";
						
					}     
				});
			});
		});
	}
}
       
		
Carte.initCarte();