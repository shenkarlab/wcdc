$( document ).ready(function() 
{
	$( "li, button" )			// types of our buttons
      //.button()
      .click(function( event ) 
      {
      	console.log(this.id + " was pressed");		// print pressed type to console
      	if (this.id == 'twitter')						// decide wich function to call
      		{
      			window.open("http://www.twitter.com/wwwcdc");
      		}
      	if (this.id == 'warn')
      		{
				window.open("mailto:?Subject=I%20told%20you%20cats%20are%20EVIL!&body=http://www.DontTrustYourCat.com%0D%0A--Forward%20to%20humans%20only");
      		}
      	if (this.id == 'report')
      		{
      			
      		}
      		
        event.preventDefault();
      });
});

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, "fast", easing, callback);
};

