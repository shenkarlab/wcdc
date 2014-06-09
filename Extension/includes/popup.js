$( document ).ready(function() 
{
	$( "li, button" )			// types of our buttons
      //.button()
      .click(function( event ) 
      {
      	console.log(this.id + " was pressed");		// print pressed type to console
      	if (this.id == 'infected')						// decide wich function to call
      		{
				$(".pop").slideFadeToggle(function() { 
					$("#email").focus();
				});
      		}
      	if (this.id == 'cdc')
      		{
      			$(".pop2").slideFadeToggle(function() { 
				});
      		}
      	if (this.id == 'warn')
      		alert("fuckyou");
      		
        event.preventDefault();
      });
});

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, "fast", easing, callback);
};
