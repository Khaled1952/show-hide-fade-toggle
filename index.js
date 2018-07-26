$(document).ready(function(){
	//$('h1').hide();
	$('div.hidden').hide();
	$('p').fadeOut(1000)
	//$('div.hidden').fadeIn(8000);
	$('#box1').click(function(){
		$(this).fadeTo(2000, 0.25, function(){
			$(this).slideUp();
		});
	});
	$('div.hidden').slideDown();

	$('button').click(function(){
		$('#box1').slideToggle(2000, function(){
			$('button').text("SlideUp");
		});
	});
});