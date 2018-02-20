$('.filler').mouseenter(function(){
	$(this).children( 'div.lowtext' ).css('opacity', '1');
});

$('.filler').mouseleave(function(){
	$(this).children( 'div.lowtext' ).css('opacity', '0');
});