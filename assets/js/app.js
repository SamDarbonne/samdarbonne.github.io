// sanity check
console.log("app.js linked.");

$('.rave').on('click', function(){
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	$('body').css('background-color', 'rgb(' + red +', '+green+', '+blue+')');
	$('header').css('background-color', 'rgb(' + red +', '+green+', '+blue+')');
});
