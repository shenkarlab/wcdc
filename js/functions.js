$(document).ready(function() { 

	
$(".kkcount-down").kkcountdown({
    dayText : 'day ',
    daysText : 'days ',
    hoursText : 'h ',
    minutesText : 'm ',
    secondsText : 's',
    displayZeroDays : false,
    oneDayClass : 'one-day'
});


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
 
 $("#home2").click(function(){
      
      scrollTo("#wrapper");
    });

$("#home1").click(function(){
      
      scrollTo("#wrapper");
    });

$("#about1").click(function(){
      
      scrollTo(".about_photo");
    });

$("#about2").click(function(){
      
      scrollTo(".about_photo");
    });

$("#about3").click(function(){
      
      scrollTo(".about_photo");
    });

$("#gallery1").click(function(){
      
      scrollTo(".gallery");
    });


$("#gallery2").click(function(){
      
      scrollTo(".gallery");
    });

$("#share1").click(function(){
      
      scrollTo(".footer_block");
    });


  /**lamding_pics**/
  $(".marvin").hover(function(){
      
    $(this).attr("src", "images/landing/marvin2.png")
  },function(){
    $(this).attr("src", "images/landing/marvin1.png");

  });

  $(".green").hover(function(){
  
    $(this).attr("src", "images/landing/green2.gif");
  },function(){
    $(this).attr("src", "images/landing/green1.png");
  });

  $(".42").hover(function(){
  
    $(this).attr("src", "images/landing/42_2.png");
  },function(){
    $(this).attr("src", "images/landing/42_1.png");
  });

  $(".missle").hover(function(){
  
    $(this).attr("src", "images/landing/missle2.gif");
  },function(){
    $(this).attr("src", "images/landing/missle1.png");
  });

  $(".whale").hover(function(){
  
    $(this).attr("src", "images/landing/whale2.png");
  },function(){
    $(this).attr("src", "images/landing/whale1.png");
  });

  $(".star").hover(function(){
  
    $(this).attr("src", "images/landing/star1.gif");
  },function(){
    $(this).attr("src", "images/landing/star1.png");
  });


  $(".star3").hover(function(){
  
    $(this).attr("src", "images/landing/star4.gif");
  },function(){
    $(this).attr("src", "images/landing/star3.png");
  });


  $(".pet").hover(function(){
  
    $(this).attr("src", "images/landing/pet2.png");
  },function(){
    $(this).attr("src", "images/landing/pet1.png");
  });

  $(".dont").hover(function(){
  
    $(this).attr("src", "images/landing/dont2.png");
  },function(){
    $(this).attr("src", "images/landing/dont1.png");
  });


  $(".dol").hover(function(){
  
    $(this).attr("src", "images/landing/dol1.gif");
  },function(){
    $(this).attr("src", "images/landing/dol1.png");
  });


  $(".sun").hover(function(){
  
    $(this).attr("src", "images/landing/sun2.png");
  },function(){
    $(this).attr("src", "images/landing/sun1.png");
  });

 $(".solong").hover(function(){
  
    $(this).attr("src", "images/landing/solong2.png");
  },function(){
    $(this).attr("src", "images/landing/solong1.png");
  });


 $(".towel").hover(function(){
  
    $(this).attr("src", "images/landing/towel2.png");
  },function(){
    $(this).attr("src", "images/landing/towel1.png");
  });


 $(".banner").hover(function(){
  
    $(this).attr("src", "images/ban1.gif");
  },function(){
    $(this).attr("src", "images/banner.png");
  });

  
/**drag**/
  $(function() {
    $( ".draggable" ).draggable();
  });

  $(function() { $( ".draggable" ).draggable({ containment: "window" }); });


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



