var $arrow = $("#arrow a");
//this works
var $off = $("main").offset().top;

//below not working - in the tutorial it works
$("#arrow").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $("main").offset().top - 70,
    },
    1200
  );
});
