$(document).ready(function() {
	$('#slideshow ul').cycle({
		next: '.next',
		prev: '.prev'
	});
	$('#slideshow ul li').each(function(){
		caption = $(this).find('p').text();
		$(this).find('p').remove();
		$(this).find('h4 a').after(' ' + caption);
		$(this).find('.thumb')
			.append($(this).find('img'));
		$(this).wrap($(this).find('.thumb a'))
	});
	for (n=1; n <= $('#buttons ul li').length; n++) {
		$('#buttons ul li')
			.eq(n-1) //eq is index 0
				.find('a')
				.css('background', 'url(/images/home/bg-btn' + n%3 + '.gif)');
	}
	$('dl.calendar-day:last').css('background', 'none');
});
        