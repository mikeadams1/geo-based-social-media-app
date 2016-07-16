// Index.html
		
//Builds timestamp date from a date
function buildDateFromDate(date){
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	var hour = date.getHours();
		
	var dDate = new Date(year, month, day, hour);
	var sDate = Date.parse(dDate);
	return sDate;
}

//Builds timestamp date from a string
function buildDateFromString(date, h){
	var splitted = date.split("-");
	var year = parseInt(splitted[0]);
	var month = parseInt(splitted[1]) - 1;
	var day = parseInt(splitted[2]);
	var hour = parseInt(h);
	
	var dDate = new Date(year, month, day, hour);
	var sDate = Date.parse(dDate);
	return sDate;
}

function parseDateToYYYYMMDD(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	
	if(month < 10){
		month = "0" + month;
	}
	
	if(day < 10){
		day = "0" + day;
	}
	
	var sDate = year + "-" + month + "-" + day;
	return sDate;
}

//The function to sort arrays
function compare(a,b) {
  if (a.created < b.created)
     return -1;
  if (a.created > b.created)
    return 1;
  return 0;
}

//String cleaning
function rfc3986 (str) {
  return encodeURIComponent(str)
    .replace(/!/g,'%21')
    .replace(/\*/g,'%2A')
    .replace(/\(/g,'%28')
    .replace(/\)/g,'%29')
    .replace(/'/g,'%27')
    ;
}
