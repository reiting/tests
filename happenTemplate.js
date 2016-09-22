var library = (function() {
	var monthNumber = new Date().getMonth() + 1;
	var Year = new Date().getFullYear(); 
	

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

					},
					Ordinal: function(){

					},
					DateDblDigit: function(){

					}
				}
			})(),
			MonthNumber: function(){
				return monthNumber.toString();
			},
			MonthNumberDblDigit: function(){
				if (monthNumber < 10) {
					return ("0" + monthNumber);
				} else {
					return monthNumber;
				}
			},
			AbrOfCurrentMonth: function(){
			
			},
			CurrentMonth: function(){
				
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