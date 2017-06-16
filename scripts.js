function moveChomp() {
  window.onkeydown = function(e) {
    if (!e) {
      e = window.event;
    }
    var keyPressed = e.keyCode;
    var chomp = document.getElementById("chomp");
    var top = parseInt(chomp.style.top, 10);
    var left = parseInt(chomp.style.left, 10);

    if (keyPressed == 37) { // move left
      if ( left > 0 ) {
        chomp.style.left = left - 10 + 'px';
      }
    } else if (keyPressed == 38) { // move up
      if (top > 0) {
        chomp.style.top = top - 10 + 'px';
      }
    } else if (keyPressed == 39) { // move right
      if (left + chomp.width + 10 < window.innerWidth) {
        chomp.style.left = left + 10 + 'px';
      }
    } else if (keyPressed == 40) { // move down
      if (top + chomp.height + 10 < window.innerHeight) {
        chomp.style.top = top + 10 + 'px';
      }
    }
  }
}

$(document).ready(function() {
  moveChomp();
});
