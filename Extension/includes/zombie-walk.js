function collision() 
{
		$(function() 
		{
			console.log("first");
			var $test = $('.overlay');
			var initText = $.trim($test.text()), ptr = 0;
			var timer = setInterval(function() 
			{
				var ln = $.trim($test.find('.trans').text().length);
				if (ln == initText.length) 
				{
					$test.empty();
					clearInterval(timer);
				}

				$('.overlay').html(function() 
				{    
					console.log("second");
					return $('<span>').addClass('removeMe')
						.html(initText.substring(ptr++ , ptr))
						.before($('<span>').addClass('trans').
							   html(initText.substring(0 , ptr-1)))
						.after(initText.substring(ptr));
				}).find('span.removeMe').animate({'opacity': 0}, 200);}, 300);
		});
}


function start(location, x_location)
	{
		console.log("Zombie-walk started");
		
		toastr.options = 							// The popup warning! (toastr plugin)
		{
		  "closeButton": false,
		  "debug": false,
		  "positionClass": "toast-top-full-width",
		  "onclick": null,
		  "showDuration": "300",
		  "hideDuration": "1000",
		  "timeOut": "5000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
		toastr.error("CDC advises that you leave this site immediately due to contamination. ", "WARNING")
		
		
		
		// create an new instance of a pixi stage
		// the second parameter is interactivity...
		var interactive = true;
		var stage = new PIXI.Stage(0x66FF99, interactive);
		// create a renderer instance

		var renderer = PIXI.autoDetectRenderer(1400, 1000, null, true);

		// add the renderer view element to the DOM
		document.body.appendChild(renderer.view);
		renderer.view.style.position = "absolute";
		renderer.view.style.top = "0px";
		renderer.view.style.left = "0px";

		// create a texture from an image path
		var texture = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/1.png"), true);
		var texture2 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/2.png"), true);
		var texture3 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/3.png"), true);
		var texture4 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/4.png"), true);
		var texture5 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/5.png"), true);
		var texture6 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/6.png"), true);
		var texture7 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/7.png"), true);
		var texture8 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/8.png"), true);
		var texture9 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/9.png"), true);
		var texture10 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/10.png"), true);
		var texture11 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/11.png"), true);
		var texture12 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/12.png"), true);
		var texture13 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/13.png"), true);
		var texture14 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/14.png"), true);
		var texture15 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/15.png"), true);
		var texture16 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/sprite/16.png"), true);
		var animationTextures = [texture, texture2, texture3, texture4, texture5, 
								 texture6, texture7, texture8, texture9, texture10, 
								 texture11, texture12, texture13, texture14, texture15, texture16];
		var currentAnimation;

		PIXI.TextureCache[0] = texture;
		PIXI.TextureCache[1] = texture2;
		PIXI.TextureCache[2] = texture3;
		PIXI.TextureCache[3] = texture4;
		PIXI.TextureCache[4] = texture5;
		PIXI.TextureCache[4] = texture6;
		PIXI.TextureCache[4] = texture7;
		PIXI.TextureCache[4] = texture8;
		PIXI.TextureCache[4] = texture9;
		PIXI.TextureCache[4] = texture10;
		PIXI.TextureCache[4] = texture11;
		PIXI.TextureCache[4] = texture12;
		PIXI.TextureCache[4] = texture13;
		PIXI.TextureCache[4] = texture14;
		PIXI.TextureCache[4] = texture15;
		PIXI.TextureCache[4] = texture16;


		// create a new Sprite using the texture
		var bunny = new PIXI.MovieClip(animationTextures);
		bunny.stop();
		bunny.visible = true;
		bunny.setInteractive(true);
		bunny.click = function click_func()
		{
			console.log("Clicked");
			this.visible = false;
		}

		// center the sprites anchor point
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 0.5;

		// deploy sprite at location of the trigger
		bunny.position.x = (x_location+20);
		bunny.position.y = (location+10);

		stage.addChild(bunny);

		//requestAnimFrame(animate);		// clashed with setTimeout

		var framesPerSecond = 25;
		var msPerFrame = 200;
		var walkCycleFrameCount = 16;
		var dirIndex = 1;
		var detected = 0;

		setTimeout( function animate()
		{
			var animationAgeInMs = new Date().getTime();
	
			//bunny.position.x -= 0.2;   // dont move
			//bunny.rotation -= 0.1;
			//console.log(bunny.position.x +" "+ bunny.position.y); //position of bunny

			//if (Math.round(bunny.position.x) == Math.round(x_location) && detected == 0) old colision
			
			if(Math.floor(animationAgeInMs / msPerFrame) % walkCycleFrameCount == 15 && detected == 0)
			{	// collision detection
				console.log("yes");
				detected = 1;
				//collision();
				var element = document.getElementsByTagName('span')
				var obj = element[0].style.visibility='hidden';
			}
			if(detected == 0)
				bunny.gotoAndStop((Math.floor(animationAgeInMs / msPerFrame) % walkCycleFrameCount));
			else
				bunny.gotoAndStop((Math.floor(animationAgeInMs / msPerFrame) % 2)+14);
		
			// render the stage   
			renderer.render(stage);
			requestAnimFrame(animate);
	
		} , 4000 );
	}


$(document).ready(function find() 
			{
				highlightWordPositions('cat');
				
				function highlightWordPositions(word, color) 
				{
    				var $paras = $('p'),$spans,_top = 0,_left = 0;

    				$paras.each(function () 
    				{
        				var $p = $(this),regex = new RegExp(word, 'g');

        				$p.html($p.text().replace(regex, '<span>' + word + '</span>'));
        				$spans = $p.find('span');
						
        				$spans.each(function () 
        				{
            				var $span = $(this),$offset = $span.offset(),$overlay = $('<div class="overlay"/>');
            				
            				$overlay.offset($offset).css({
                				width: $span.innerWidth(),height: $span.innerHeight()
            				});

            				$(document.body).append($overlay);
        				});
    				});
				}
				var element = document.getElementsByTagName('span')
				var obj = element[0].getBoundingClientRect() //get html object location for collision 
				console.log(obj.top); //position of objects top
				console.log(obj.left); //position of objects top
				
				if (obj.top > 0)
					start(obj.top, obj.left);
});
