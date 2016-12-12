$(document).ready(function() {
  $(".social-buttons").mouseover(function() {
    $(".social-buttons").addClass("animated infinite rubberBand");
  });
  $(".social-buttons").mouseout(function() {
    $(".social-buttons").removeClass("animated infinite rubberBand");
  });

  $(".email-button").mouseover(function() {
    $("#envelope").addClass("fa fa-envelope-open");
    $("#send-email").html("NataliaM.Hess@gmail.com");
  });
  $(".email-button").mouseout(function() {
    $("#envelope").removeClass("fa fa-envelope-open");
    $("#envelope").addClass("fa fa-envelope");
    $("#send-email").html("Send Email");
  });

});
