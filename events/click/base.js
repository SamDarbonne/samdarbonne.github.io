console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	
	$('span').on('click', function(event){
		var str = $(this).text();
		console.log(str);
		$('.output').text('You clicked on "'+str+'" at '+Date.now());
	})
})
