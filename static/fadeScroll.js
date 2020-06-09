$(window).on("load",function() {
  $(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fadeScroll").each(function() {
      /* Check the location of each desired element */
      var objectTop = $(this).offset().top;
      var objectBottom = $(this).offset().top + $(this).innerHeight();
      

        //fade in upon visiting page
        $(this).fadeTo(1000,1);

      /* If the element is completely within bounds of the window, fade it in */
      if (windowBottom >= objectBottom) { //object comes into view (scrolling down)
        // if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
      } else { //object goes out of view (scrolling up)
        // if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});