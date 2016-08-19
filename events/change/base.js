console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  	$("#time").text( Date.now() );
  	$( ".add" ).change(function() {
  		$('#total').val(Number($('#left').val()) + Number($('#right').val()));
	});
})
