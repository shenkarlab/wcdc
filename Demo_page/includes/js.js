$(function() 
{


    var $test = $('#test');
    var initText = $.trim($test.text()), ptr = 0;
    var timer = setInterval(function() {
        var ln = $.trim($test.find('.trans').text().length);
        if (ln == initText.length) {
            $test.empty();
            clearInterval(timer);
        }

        $('#test').html(function() {    

            return $('<span>').addClass('removeMe')
                .html(initText.substring(ptr++ , ptr))
                .before($('<span>').addClass('trans').
                       html(initText.substring(0 , ptr-1)))
                .after(initText.substring(ptr));
        }).find('span.removeMe').animate({'opacity': 0}, 200);
                
    }, 300);
});