console.log("Sanity Check: JS is working!");
var keypressTime;
var johnny = 0;
$(document).ready(function(){
	$(window).on('keypress', function(){
		
		setInterval(function handleKeypress(event){
			console.log('hello');
			if(keypressTime){
				$('#total-time').text(   Math.round((Date.now() - keypressTime)/10)/100 + ' seconds!'   )
			} 
			else {
				keypressTime = Date.now()
			}
		}), 10})
})

