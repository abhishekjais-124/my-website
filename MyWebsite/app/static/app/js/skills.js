jQuery(document).ready(function () {
    "use strict";

    $(window).scroll(function () {
        var top = $(
          window
        ).scrollTop(); /*to count how much user has scrolled from the top */
        if (top > 2500) {
          $(".html-circle1").addClass("circle-anime1");
          $(".html-circle2").addClass("circle-anime2");
          $(".html-circle3").addClass("circle-anime3");
          $(".html-circle4").addClass("circle-anime4");
          $(".html-circle5").addClass("circle-anime5");
          $(".html-circle6").addClass("circle-anime6");
          $(".html-circle7").addClass("circle-anime7");
          $(".html-circle8").addClass("circle-anime8");

            // let number = document.getElementById("number");
            // let counter = 0;
            // setInterval(() => {
            //   if (counter == 10) {
            //     $(".html-circle1").addClass("circle-anime1");
            //     $(".html-circle2").addClass("circle-anime2");
            //     $(".html-circle3").addClass("circle-anime3");
            //     $(".html-circle4").addClass("circle-anime4");
            //     $(".html-circle5").addClass("circle-anime5");
            //     $(".html-circle6").addClass("circle-anime6");
            //     $(".html-circle7").addClass("circle-anime7");
            //     $(".html-circle8").addClass("circle-anime8");
            //     clearInterval();
            //   } else {
            //     counter += 1;
            //     // number.innerHTML = "HTML " + counter + "%";
            //   }
            // }, 30);
        } 
      });
}); 

