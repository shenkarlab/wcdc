$(document).ready(function() // pull from php function
{
	var index = 0;					// first index of loop
	var sIndex = 0;					// second index of loop
	var text = []					// message
	var createdAt = [];				// message time
	$.getJSON("http://shenkar.html5-book.co.il/2013-2014/html5/dev_17/tweets_json.php",function(data)
	{
		$.each(data,function(key,val)
		{
			while(index < data.length)
			{	// this while is running all over the json file
				$("#twitter_update_list").append
				("<p>" + data[index].created_at + "<br>" + data[index].text + "<br><br>" + "</p>");

				console.log(data[index].text);
				index++;
			}
					
		});
	});
	
	
});

