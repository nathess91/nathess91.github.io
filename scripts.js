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

});
