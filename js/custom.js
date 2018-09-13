/*campinas*/
$('.slider').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*end of campinas*/


/*itaim*/
$('.slider1').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*end of itaim*/



/*Paulista*/
$('.slider2').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*end of Paulista*/



/*testimonial*/
$(document).ready(function() {
  var time = 2;
  var $bar,
    $slick,
    isPause,
    tick,
    percentTime;

  $slick = $('.normalslider');
  $slick.slick({
    draggable: true,
    adaptiveHeight: false,
    dots: true,
    mobileFirst: true,
    pauseOnDotsHover: true,
  });

  $bar = $('.slider-progress .progress');

  $('.slider-wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slick.slick('slickNext');
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  startProgressbar();
});

/*end of testimonial*/


/*instagram slider*/
$('.slider-div-img').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:7,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 6
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*end of instagram slider*/



/*Título responsive slider*/
$('.main-row6').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:7,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
  
   {
      breakpoint:1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    },
  
   {
      breakpoint:800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/* end of Título responsive slider*/



/*pagination  click  to section*/
 $(document).ready(function() {
    $('.pages-change ul li a').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        var offset = 100;
        $('html, body').animate({
            scrollTop: $(page).offset().top - offset
        }, speed); // Go
        return false;
    });
});

/*end of pagination  click  to section*/


 /*Modal Menu and responsive*/

var modalMenuButton = document.querySelector(".modal-menu-button");
var modalNavBackground = document.querySelector(".modal-nav-background");
var modalNav = document.querySelector(".modal-nav");

modalMenuButton.onclick = function() {
  modalMenuButton.classList.toggle("on");
  modalNavBackground.classList.toggle("on");
  modalNav.classList.toggle("on");
};
  /*end of Modal Menu and responsive*/



  /*scrolling message show*/
  $(window).show(function() {
  if($(this).scrollTop() >= 0) {
    $('.foot').addClass('scrolled');
   
  }
});
$('a[href="#"]' ).click( function(e) {
   e.preventDefault();
});
$('.footclose').click(function() {
  //$('.foot').fadeOut(600,function(){
  $('.foot').removeClass('scrolled').addClass('gone');
  //$('.foot').remove();

});
 /*end of scrolling message show*/


 /*blog*/

/*videotarget*/
  var video_player = document.getElementById("video_player"),
links = video_player.getElementsByTagName('a');
for (var i=0; i<links.length; i++) {
  links[i].onclick = handler;
}

function handler(e) {
  e.preventDefault();
  videotarget = this.getAttribute("href");
  filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
  video = document.querySelector("#video_player video");
  video.removeAttribute("controls");
  video.removeAttribute("poster");
  source = document.querySelectorAll("#video_player video source");
  source[0].src = filename + ".mp4";
  source[1].src = filename + ".webm";
  video.load();
  video.play();    
}

/*end of videotarget*/

/*end of blog*/




/*studeo*/
 /*img-slider*/

 $('.img-slider').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
  
   {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
  
   {
      breakpoint:800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*end of img-slider*/



/*Trabalhe*/
  /*file upload*/
  // ajout de la classe JS à HTML
document.querySelector("html").classList.add('js');
 
// initialisation des variables
var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
 
// action lorsque la "barre d'espace" ou "Entrée" est pressée
button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
 
// action lorsque le label est cliqué
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});
 
// affiche un retour visuel dès que input:file change
fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;
    $('#labelFU').text("Choosen file : " + this.value);
});
  /*end of file upload*/
/*end of Trabalhe*/



/*unidades*/

/*campinas*/
$('.slider4').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*end of campinas*/


/*itaim*/

$('.slider5').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*end of itaim*/


/*natal*/
$('.slider6').slick({
  dots: true,
  infinite:true,
  speed: 800,
  slidesToShow:1,
   autoplay: true,
  autoplaySpeed:3200,
  slidesToScroll:1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
	
	 {
      breakpoint:1199,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint:680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    },
	
	 {
      breakpoint:800,
      settings: {
        slidesToShow:1,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*end of natal*/
/*end of unidades*/