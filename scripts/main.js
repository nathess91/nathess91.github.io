function animateChomp() {
   $("#chomp").animate({
     left: $(window).innerWidth() - 100
   }, 12000, function() {
     $("#chomp").addClass("flip-chomp");
     $("#chomp").animate({
       left: 0
     }, 12000);
   });
   $("#chomp").removeClass("flip-chomp");
}

function moveChomp() {
  window.onkeydown = function(e) {
    $(".animated").removeClass("infinite");
    $("#chomp").stop();
    if (!e) {
      e = window.event;
    }
    var keyPressed = e.keyCode;
    var top = parseInt(chomp.style.top, 10);
    var left = parseInt(chomp.style.left, 10);

    if (keyPressed == 37) { // move left
      if (left > 0) {
        $("#chomp").addClass("flip-chomp");
        chomp.style.left = left - 20 + 'px';
      }
    } else if (keyPressed == 38) { // move up
      if (top > 400) {
        chomp.style.top = top - 20 + 'px';
      }
    } else if (keyPressed == 39) { // move right
      if (left + chomp.width + 20 < window.innerWidth) {
        $("#chomp").removeClass("flip-chomp");
        chomp.style.left = left + 20 + 'px';
      }
    } else if (keyPressed == 40) { // move down
      if (top + chomp.height + 20 < window.innerHeight) {
        chomp.style.top = top + 20 + 'px';
      }
    }
  }
}

$(document).ready(function() {
  animateChomp();
  setInterval(function() {
    animateChomp();
  }, 24000);
  moveChomp();
  console.log("I'm under construction! Keep checking back!")
});
