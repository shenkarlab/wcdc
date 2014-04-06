			function animate(targetElement, speed)
			{
    
				$(targetElement).css({left:'-200px'});
				$(targetElement).animate(
					{
					'left': $(document).width() + 200
					}, 
					{ 
					duration: speed, 
					complete: function(){
						animateMe(this, speed);
						}
					}
				);
	
			};

