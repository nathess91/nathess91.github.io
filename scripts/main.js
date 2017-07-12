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

function scrollTo() {
  var gallery = {
    "#aquis-click" : "#aquis-project",
    "#dockit-click" : "#dockit-project",
    "#popped-click" : "#popped-project",
    "#swolemates-click" : "#swolemates-project",
    "#paws-click" : "#paws-project",
    "#fellowship-click" : "#fellowship-project",
  };


  $("#aquis-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#aquis-project").offset().top
    }, "slow");
  });
  $("#dockit-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#dockit-project").offset().top
    }, "slow");
  });
  $("#popped-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#popped-project").offset().top
    }, "slow");
  });
  $("#swolemates-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#swolemates-project").offset().top
    }, "slow");
  });
  $("#paws-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#paws-project").offset().top
    }, "slow");
  });
  $("#fellowship-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#fellowship-project").offset().top
    }, "slow");
  });
  $("#wrap-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#wrap-project").offset().top
    }, "slow");
  });
  $("#archive-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#archive-project").offset().top
    }, "slow");
  });
  $("#octoboard-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#octoboard-project").offset().top
    }, "slow");
  });

  $("#wrap-engineering-click").click(function() {
    $("html,body").animate({
      scrollTop: $("#wrap-engineering").offset().top
    }, "slow");
  });

  $("#wrap-learn").click(function() {
    $("html,body").animate({
      scrollTop: $("#wrap-project").offset().top
    }, "slow");
  });
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
  scrollTo();
  setInterval(function() {
    animateChomp();
  }, 24000);
  console.log("There's always money in the banana stand.")
});
