var library = (function() {
	var monthNumber = new Date().getMonth() + 1;
	var Year = new Date().getFullYear(); 
	var dayMonth = new Date().getDate();
	vardayYear = new Date().get
	var monthNames = ["January", "February", "March", "April", "May", "June",
 	 "July", "August", "September", "October", "November", "December"];
	var currentMonth = (monthNames [new Date().getMonth()]);
	var abrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var abrCurrentMonth = (abrMonthNames [new Date().getMonth()]);

  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){

		},
		UnixMillisecond: function(){

		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){

					},
	   	    WithOutSeconds: function() {

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

			},
			DblDigit: function(){

			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				
			},
			DblDigit: function(){

			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {

			},
			TwelveHour: function() {

			},
			AMPM: (function() {
				return {
					UpperCase: function(){

					},
					LowerCase: function(){

					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){

			},
			AbrDayOfWeek: function(){

			},
			FirstTwoOfWeek: function(){

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