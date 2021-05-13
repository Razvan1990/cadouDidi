

	
	date = new Date();

	var day = date.getDate();
	if(day<10){
		day = '0'+day;
	}
	var month = date.getMonth()+1;
	if(month <10){
		month = '0'+month;
	}

	var today = date.getFullYear()+"-"+month+"-"+day;

	var endDate = "2021-06-12";
//este in milisecunde
	var milisecundsDays = new Date(endDate) - new Date(today);
	var daysRemaining = milisecundsDays /(1000 * 3600 * 24);
	var daysRemainingConverted = daysRemaining.toString();
	

 document.getElementById("time").innerHTML = daysRemainingConverted;

