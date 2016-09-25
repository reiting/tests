var library = (function() {
	//gets the number of the current month
	var monthNumber = new Date().getMonth() + 1;
	//gets the year as 4 digits
	var Year = new Date().getFullYear(); 
	//gets the day of the month
	var dayMonth = new Date().getDate();
	//gets day of week from 0-6
	var dayWeek = new Date().getDay();
	//array with Month names
	var monthNames = ["January", "February", "March", "April", "May", "June",
 	 "July", "August", "September", "October", "November", "December"];
	//gets the name of the current month using the array monthNames
	var currentMonth = (monthNames [new Date().getMonth()]);
	//array with abbreviated month names
	var abrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	//gets the abbreviated name of the current month using the array of monthNames
	var abrCurrentMonth = (abrMonthNames [new Date().getMonth()]);
	//array with weekday names
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	//gets the current day using the array of weekday
	var currentDay = (weekday [dayWeek]);
	//gets the time in 24 hour format
	var twentyFourHour = new Date().getHours();
	//gets seconds from 0-59
	var seconds = new Date().getSeconds();
	//gets minutes from 0-59
	var minutes = new Date().getMinutes();
	//gets milliseconds in UTC
	var unixMillisecond = new Date().getTime();
	//Am and PM
	var amPM = function (){
	if (twentyFourHour >= 12) {
						return ("PM");
						} else {
						return ("AM");
						}
	}();
	//get twelve hour time
	var twelveHour = function() {
				if (twentyFourHour <= 12) {
					return twentyFourHour;
				} else {
					return (twentyFourHour % 12);
				}
	}();

	//get current time
	function addZero(i) {
    	if (i < 10) {
        	i = "0" + i;
   			 }
    	return i;
		}

	//variables for hour, minute, and second
    var h = addZero(new Date().getHours());
    var m = addZero(new Date().getMinutes());
    var s = addZero(new Date().getSeconds());

	//gets double digit month
	var monthDblDigit = function() {
		if (monthNumber < 10) {
				return ("0" + monthNumber.toString());
				} else {
					return monthNumber.toString();
				}
	}();

	//gets double digit day
	var dayDblDigit = function() {
		if (dayMonth < 10) {
						return ("0" + dayMonth.toString());
						} else {
							return dayMonth.toString();
						}
	}();

	//function to get the ordinal day 
	var ordinalDay = function() {
		if (dayMonth > 3 && dayMonth < 21) return "th";

		else if ((dayMonth % 10) == 1) return "st";
		else if ((dayMonth % 10) == 2) return "nd";
		else if ((dayMonth % 10) == 3) return "rd";
		else return "th";
	}();

//gets day of Year
var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
var yearFirstDay = Math.floor(timestmp / 86400000);
var today = Math.ceil((new Date().getTime()) / 86400000);
var dayOfYear = today - yearFirstDay;









// var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);//gets the first of the year
// var dayOfFirstOfYear= timestmp.getday();//gets 0 index # for first day of the year
// var weekCount;

// if (dayOfFirstOfYear != 0) {
// var daysOfYearMinusFirstWeek = dayOfYear -(7-dayOfFirstOfYear);//subtracts days of first week if the first week 
// //didn't start on a Sunday'Year-(7-dayOfFirstOfYear);
// 	weekCount ++;//adds 1 to the week count if the first week of the year was not 7 days long
// 	var weekCount = daysOfYearMinusFirstWeek / 7;
// 	var moduloDaysOfYear = daysOfYearMinusFirstWeek % 7;//divides # of days in the year by 7 and gets the remainder
// 	if moduloDaysOfYear != 0 {//if there was a remainder when divinding days of the year by 7
// 		weekCount++;//add 1 to the week 
	
	
// 	}
// }














  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var dateTime = Date.now();
			var timeStamp = Math.floor(dateTime / 1000);
			return timeStamp.toString();
		},
		UnixMillisecond: function(){
			return new Date().getTime();
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				  return (twelveHour + ":" + m + ":" + s) + " " + amPM.toString();
					},
	   	    WithOutSeconds: function() {
				   return (twelveHour + ":" + m) + " " + amPM.toString();
					 }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
				return (monthNumber + "/" + dayDblDigit + "/" + Year).toString();
				},
			Name: function(){
				return (currentMonth + " " + dayDblDigit + "," + " " + Year).toString();
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				return seconds.toString();
			},
			DblDigit: function(){
				if (seconds < 10) {
					return ("0" + seconds.toString());
				} else {
					return seconds.toString();
						}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				return minutes.toString();
			},
			DblDigit: function(){
				if (minutes < 10) {
					return ("0" + minutes.toString());
				} else {
					return minutes.toString();
						}
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				return twentyFourHour.toString();
			},
			TwelveHour: function() {
				if (twentyFourHour <= 12) {
					return twentyFourHour.toString();
				} else {
					return (twentyFourHour % 12).toString();
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						if (twentyFourHour >= 12) {
						return ("PM");
						} else {
						return ("AM");
						}
					},
					LowerCase: function(){
						if (twentyFourHour >= 12) {
						return ("pm");
						} else {
						return ("am");
						}
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				return currentDay.toString();
			},
			AbrDayOfWeek: function(){
				return currentDay.substring (0,3);
			},
			FirstTwoOfWeek: function(){
				return currentDay.substring (0,2);
			},
			WeekOfYear: function(){
				 var now = new Date();
                                var start = new Date(now.getFullYear(), 0, 0);
                                var diff = now - start;
                                var oneDay = 1000 * 60 * 60 * 24;
                                var day = Math.floor(diff / oneDay);
                                return String(Math.round(day / 7));
                                ;
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						return dayMonth.toString();
					},
					Ordinal: function(){
						return (dayMonth + ordinalDay).toString();
					},
					DateDblDigit: function(){
						if (dayMonth < 10) {
							return ("0" + dayMonth.toString());
						} else {
							return dayMonth.toString();
						}
					}
				}
			})(),
			MonthNumber: function(){
				return monthNumber.toString();
			},
			MonthNumberDblDigit: function(){
				if (monthNumber < 10) {
					return ("0" + monthNumber.toString());
				} else {
					return monthNumber.toString();
				}
			},
			AbrOfCurrentMonth: function(){
				return abrCurrentMonth;
			},
			CurrentMonth: function(){
				return currentMonth;
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						return dayOfYear.toString();
					},
					Ordinal: function(){
						return (dayOfYear + ordinalDay).toString();
					}
				}
			})(),
			YearFull: function(){
				return Year.toString();
				
			},
			YearAbr: function(){
				return (Year % 100).toString();
			}
		}
	})(),
	Defaults: function(){
		return (Year + "-" + monthDblDigit + "-" + dayDblDigit + "T" + h + ":" + m + ":" + s).toString();
	}
  }
})();