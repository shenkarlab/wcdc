$(document).ready(function() // pull from php function
{
	var index = 0;					// first index of loop
	var sIndex = 0;					// second index of loop
	var text = []					// message
	var createdAt = [];				// message time
	$.getJSON("http://www.donttrustyourcat.com/php/tweets_json.php",function(data)
	{
		$.each(data,function(key,val)
		{
			while(index < data.length)
			{	// this while is running all over the json file
				$("#twitter_update_list").append
				("<p>" + data[index].created_at + "<br>" + data[index].text + "<br><br>" + "</p>");
				// if($(document).height() > 343)	// remove messages that exceed our space
// 					$('#twitter_update_list:last-child').children().last().remove();
					
				console.log($( document ).height());
				console.log(data[index].text);
				index++;
			}
					
		});
	});
	
	
});

