$(document).ready(function() { 


$(".gallery_li").click(function() {

	$(this).addClass('current').siblings().removeClass('current');
	$(".gallery_page").addClass('hide').eq($(this).index()).removeClass('hide');
});

    
function scrollTo(elementId){
      $('html, body').animate({
          scrollTop: $(elementId).offset().top
      }, 1400,"easeInOutQuart"); 
      
    }

 $(window).resize(function(){
    onPageResize();
 });

 onPageResize();
 
 $(".map_button").click(function(){
      
      scrollTo("#wrapper");
    });

$(".his_button").click(function(){
      
      scrollTo(".gallery");
    });

$(".download_button").click(function(){
      
      scrollTo(".About");
    });

$(".contact_button").click(function(){
      
      scrollTo(".footer");
    });
});

/**LandingResize**/
function onPageResize(){
  $(".stretch").height(   $(window).height()  );
}

function showHeight(ele, h) {
      $("div").text("The height for the " + ele +
                    " is " + h + "px.");
    }
    $("#getw").click(function () {
      showHeight("window", $(window).height());
    });



