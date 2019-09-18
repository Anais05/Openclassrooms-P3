// Timer  
var Chrono = 
{
	
	initTimer :  function()
    {    	
    	var dateDeFin = new Date();
        dateDeFin = dateDeFin.setMinutes(dateDeFin.getMinutes() + 20);
        sessionStorage.setItem("dateFin", dateDeFin);        
    },    

	updateTimer : function ()
	{
		//on recupere la date de fin dans session storage qui a été convertit
        var endTime = sessionStorage.getItem('dateFin');

        //On recupere la date current et on la convertit avec getTime()
        var now = new Date().getTime();
        //On fait la difference entre les deux dates
        var restTime =  endTime - now ;  
             
        return restTime;        
    },

    startTimer : function ()
    {
        var annuler = document.getElementById("annulation");
        document.getElementById("expireresa").style.display = "none"
        document.getElementById("annulresa").style.display = "none"

        var timerInterval = setInterval(function()
        {
            var restTime = Chrono.updateTimer();  
            //on convertit en minutes puis en secondes
            var minutes = Math.floor((restTime / (1000 * 60)));
            var secondes = Math.floor((restTime % (1000 * 60)) / 1000);

            var info = document.getElementById("info");

           // fin du chrono
            if(restTime < 1){
            clearInterval(timerInterval);
            info.style.display = "none";
            document.getElementById("expireresa").style.display = "block"
            }else {
                // affichage 08:09 au lieu de 8:9
                if (minutes < 10) {
                minutes = '0'+minutes;
                }
                if (secondes < 10) {
                secondes = '0'+secondes;
                }
                document.getElementById("minutes").textContent = minutes;
                document.getElementById("secondes").textContent = secondes;   
            }
        }, 1000);

        annuler.addEventListener("click" , function()
        {
            clearInterval(timerInterval);
            info.style.display = "none";
            document.getElementById("annulresa").style.display = "block"
        });
    },
};



