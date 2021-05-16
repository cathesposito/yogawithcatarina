if (window.matchMedia("(max-width: 1024px)").matches) {
  document.getElementById("background").style.backgroundImage =  "url('images/covermobile.png')";
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
  document.getElementById("background").style.backgroundImage =  "url('images/coveryoga.png')";
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
