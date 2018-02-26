
$('.filler').mouseenter(function(){
	$(this).children( 'div.lowtext' ).css('opacity', '1');
});

$('.filler').mouseleave(function(){
	$(this).children( 'div.lowtext' ).css('opacity', '0');
});


//MODAL LIST
$('.portfolioitem1').click(function(){
  $('#citytoseabridge_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem2').click(function(){
  $('#onefatbird_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem3').click(function(){
  $('#kiwiventure_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})

$('.portfolioitem4').click(function(){
  $('#randomword_modal').modal({
     fadeDuration: 300,
     fadeDelay: 0
  })
})