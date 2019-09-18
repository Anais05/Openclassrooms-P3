// diaporama
var Diapo =
{
  current : 0,
  pause : document.getElementById("pause"),
  play : document.getElementById("play"),
  droite : document.querySelector(".fa-chevron-right"),
  gauche : document.querySelector(".fa-chevron-left"),
  slides : document.querySelectorAll(".slide"),

  InitDiapo : function()
  {
    var slideAuto = setInterval(Diapo.addOneToCurrent,5000);

    play.style.visibility = "hidden";
    pause.addEventListener("click", function() 
    {
      clearInterval(slideAuto);
      pause.style.visibility = "hidden";
      play.style.visibility = "visible";  
    });
    
    play.addEventListener("click", function() 
    {   
      slideAuto = setInterval(Diapo.addOneToCurrent,5000);
      pause.style.visibility = "visible";
      play.style.visibility = "hidden";
    });

   // fleche gauche
    
    gauche.addEventListener("click", function() 
    {
      if (Diapo.current === 0) {
      Diapo.current = Diapo.slides.length; }
      Diapo.slideGauche();
    });

    // fleche droite    
    droite.addEventListener("click", function() 
    {
      if (Diapo.current === Diapo.slides.length - 1) {
      Diapo.current = -1; }
      Diapo.slideDroite();
    });

    // navigation clavier
    document.addEventListener("keydown", e=> 
    {
      if (e.keyCode === 37) 
      {
        Diapo.retriveOneToCurrent(); 
      } 
      else if(e.keyCode === 39) 
      {
        Diapo.addOneToCurrent(); 
      }
    });
    Diapo.startSlide();

  },

  beginning : function()
  {
    for (let i = 0; i < Diapo.slides.length; i++) {
      Diapo.slides[i].style.display = "none"; 
    }
  },
  retriveOneToCurrent : function()
  {
    if (Diapo.current === 0) {
      Diapo.current = Diapo.slides.length; 
    }
    Diapo.slideGauche();
  },

  addOneToCurrent : function()
  {  
    if (Diapo.current === Diapo.slides.length - 1) {
    Diapo.current = -1; }
    Diapo.slideDroite();
  },

  // Init slider
  startSlide : function() 
  {
    Diapo.beginning();
    Diapo.slides[0].style.display = "block";
  },

  // précedent
  slideGauche : function() 
  {
    Diapo.beginning();
    Diapo.slides[Diapo.current - 1].style.display = "block";
    Diapo.current--;
  },

  // suivant
  slideDroite : function() 
  {
    Diapo.beginning();
    Diapo.slides[Diapo.current + 1].style.display = "block";
    Diapo.current++;
  }
};
Diapo.InitDiapo();

