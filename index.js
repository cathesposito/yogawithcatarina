if (window.matchMedia("(max-width: 1000px)").matches) {
  $("body").addClass("background2");
  function positionMobile(i) {

    var image = ".image" + i;
    var hide = ".hide" + i;

    $(image).css("width", "100%");
    $(hide).toggle();

  };

  for (i = 1; i <= 12; i++) {
    positionMobile(i)
  };



} else {
  $("body").addClass("background1");

  $("button").click(function() {
    $("#text").toggle("slow");
    if ($(".hide").css("visibility") == "visible")
      $(".hide").css("visibility", "hidden");
    else
      $(".hide").css("visibility", "visible");
  });


  function position(i) {

    var image = ".image" + i;
    var hide = ".hide" + i;

    $(image)
      .on("mouseenter", function() {
        $(this).css("width", "100%");
        $(hide).toggle();
      })
      .on("mouseleave", function() {
        $(this).css("width", "90%");
        $(hide).toggle();
      })

  };

  for (i = 1; i <= 12; i++) {
    position(i)
  };
}
