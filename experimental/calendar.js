
function setDates (offset, daysInMonth){
	for (var i = 1; i <= daysInMonth; i++){
    	$('.box')[i + offset].innerHTML = i;
	}
}

setDates(5, 30)