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

    var h = addZero(new Date().getHours());
    var m = addZero(new Date().getMinutes());
    var s = addZero(new Date().getSeconds());




	//function to get the ordinal day 
	var ordinalDay = function() {
		if (dayMonth > 3 && dayMonth < 21) return "th";

		else if ((dayMonth % 10) == 1) return "st";
		else if ((dayMonth % 10) == 2) return "nd";
		else if ((dayMonth % 10) == 3) return "rd";
		else return "th";
	}();


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

				},
			Name: function(){

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

					},
					Ordinal: function(){

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

	}
  }
})();