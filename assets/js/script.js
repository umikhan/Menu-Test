$(document).ready(function() {
  $('nav li').hover(
  function() {
    $('ul', this).stop().slideDown(200);
  },
  function() {
    $('ul', this).stop().slideUp(800);
  }
);
  if ($(window).width() < 768) {
  //Check if the current URL contains '#'
    if(document.URL.indexOf("#")==-1){
        // Set the URL to whatever it was plus "#".
        url = document.URL+"#";
        location = "#";

        //Reload the page
        location.reload(true);
    }
    $(".hamburger i").click(function() {
  		$( "nav" ).animate({top: "60",}, 500, function() {});
      $(".hamburger").hide('fast');
       $(".close").show('fast');
    });
    $(".close i").click(function() {
  		$( "nav" ).animate({top: "-200",}, 500, function() {});
       $(".close").hide('fast');
        $(".hamburger").show('fast');
    });
  }  
});