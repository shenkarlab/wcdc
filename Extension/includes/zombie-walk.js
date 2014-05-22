function start(location)
	{
		// create an new instance of a pixi stage
		var stage = new PIXI.Stage(0x66FF99);
		// create a renderer instance

		var renderer = PIXI.autoDetectRenderer(1400, 1000, null, true);

		// add the renderer view element to the DOM
		document.body.appendChild(renderer.view);
		renderer.view.style.position = "absolute";
		renderer.view.style.top = "0px";
		renderer.view.style.left = "0px";
		requestAnimFrame( animate );

		// create a texture from an image path
		var texture = PIXI.Texture.fromImage(chrome.extension.getURL("../images/zombie-sprite/1.png"), true);
		var texture2 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/zombie-sprite/2.png"), true);
		var texture3 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/zombie-sprite/3.png"), true);
		var texture4 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/zombie-sprite/4.png"), true);
		var texture5 = PIXI.Texture.fromImage(chrome.extension.getURL("../images/zombie-sprite/5.png"), true);
		var animationTextures = [texture, texture2, texture3, texture4, texture5];
		var currentAnimation;

		PIXI.TextureCache[0] = texture;
		PIXI.TextureCache[1] = texture2;
		PIXI.TextureCache[2] = texture3;
		PIXI.TextureCache[3] = texture4;
		PIXI.TextureCache[4] = texture5;


		// create a new Sprite using the texture
		var bunny = new PIXI.MovieClip(animationTextures);
		bunny.stop();
		bunny.visible = true;

		// center the sprites anchor point
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 0.5;

		// move the sprite t the center of the screen
		bunny.position.x = 1400;
		bunny.position.y = location;

		stage.addChild(bunny);

		requestAnimFrame(animate);

		var framesPerSecond = 25;
		var msPerFrame = 200;
		var walkCycleFrameCount = 5;
		var dirIndex = 1;

		function animate() 
		{
			var animationAgeInMs = new Date().getTime();
	
			bunny.position.x -= 0.2;
			//bunny.rotation -= 0.1;
			//console.log(bunny.position.x +" "+ bunny.position.y); //position of bunny
	
			bunny.gotoAndStop((Math.floor(animationAgeInMs / msPerFrame) % walkCycleFrameCount));
			// render the stage   
			renderer.render(stage);
			requestAnimFrame(animate);
	
		}
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
				
				if (obj.top > 0)
					start(obj.top);
			});