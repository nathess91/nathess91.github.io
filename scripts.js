$(document).ready(function() {
  // MAKE THEM SOCIAL ICONS BOUNCE
  // github
  $("#social-github").mouseover(function() {
    $("#social-github").addClass("animated infinite rubberBand");
  });
  $("#social-github").mouseout(function() {
    $("#social-github").removeClass("animated infinite rubberBand");
  });
  // linkedin
  $("#social-linkedin").mouseover(function() {
    $("#social-linkedin").addClass("animated infinite rubberBand");
  });
  $("#social-linkedin").mouseout(function() {
    $("#social-linkedin").removeClass("animated infinite rubberBand");
  });
  // medium
  $("#social-medium").mouseover(function() {
    $("#social-medium").addClass("animated infinite rubberBand");
  });
  $("#social-medium").mouseout(function() {
    $("#social-medium").removeClass("animated infinite rubberBand");
  });
  // spotify
  $("#social-spotify").mouseover(function() {
    $("#social-spotify").addClass("animated infinite rubberBand");
  });
  $("#social-spotify").mouseout(function() {
    $("#social-spotify").removeClass("animated infinite rubberBand");
  });
  // twitter
  $("#social-twitter").mouseover(function() {
    $("#social-twitter").addClass("animated infinite rubberBand");
  });
  $("#social-twitter").mouseout(function() {
    $("#social-twitter").removeClass("animated infinite rubberBand");
  });


  // ANIMATE EMAIL BUTTON
  $(".email-button").mouseover(function() {
    $("#envelope").addClass("fa fa-envelope-open");
    $("#send-email").html("NataliaM.Hess@gmail.com");
  });
  $(".email-button").mouseout(function() {
    $("#envelope").removeClass("fa fa-envelope-open");
    $("#envelope").addClass("fa fa-envelope");
    $("#send-email").html("Send Email");
  });

  // BUTTON PRESS COOL STUFF
  $(".project-github").click(function() {
    $(".project-github").css({
      "text-shadow": "none",
      "top": "1px",
      "left": "1px",
      "position": "none"
    });
  });

  $(".email-button").click(function() {
    $(".email-button").css({
      "text-shadow": "none",
      "top": "1px",
      "left": "1px",
      "position": "none"
    });
  });

var isChrome = !!window.chrome && !!window.chrome.webstore;
function Chrome() {
  if (!isChrome) {
    alert("This portfolio is best viewed in Chrome.");
  }
}

$('.horizontal-scroll').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 3,
autoplay: true,
autoplaySpeed: 3000,
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
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

});
