$('.rave').on('click', setInterval(function(event){
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	debugger
	$('body').css('background-color', 'rgb(' + red +', '+green+', '+blue+')');
}), 50000);