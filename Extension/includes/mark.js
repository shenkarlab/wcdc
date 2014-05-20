function mark()
			{
				var page = window.location.href;
				var obj = document.getElementById("wrapper");
				var elements = obj.getElementsByTagName("a");
	
				for (i=0; i<elements.length; i++)
				{
					temp = page.indexOf(elements[i].href);
					if (temp >= 0)
					{
						elements[i].id = 'current';
					}
				}
			};