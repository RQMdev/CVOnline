$('#page-container').click(function(){
	$('#page-container').addClass('toMenu');
});

$('.nav-personal-info').click(function(){
	$('.container').removeClass('display');
	$('.personal-info-container').addClass('display');
	$('.headline-container').addClass('display');
	$('.photo-container').addClass('display');
});

$('.nav-projects').click(function(){
	$('.container').removeClass('display');
	$('.projects-container').addClass('display');
});

$('.nav-languages').click(function(){
	$('.container').removeClass('display');
	$('.languages-container').addClass('display');
});

$('.nav-experiences').click(function(){
	$('.container').removeClass('display');
	$('.experiences-container').addClass('display');
});

$('.nav-diplomas').click(function(){
	$('.container').removeClass('display');
	$('.diplomas-container').addClass('display');
});

$('.nav-hobbies').click(function(){
	$('.container').removeClass('display');
	$('.hobbies-container').addClass('display');
});
