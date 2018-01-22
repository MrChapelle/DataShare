//000
function max_weight_data_treatment(question_parameters)
{
	var max_weight_last_year = 0;
	var max_weight_date = "";
	for (var i = 0 ; i < max_weight_month.length ; i++)
	{
		if (max_weight_month[i].max > max_weight_last_year)
		{
			max_weight_last_year = max_weight_month[i].max;
			max_weight_date = max_weight_month[i].date;
		}
	}
	document.getElementById('information_container').innerHTML = "Your last registered weight is : <br><b>" + current_weight + " kg<br></b> Your maximum weight last year was : <br><b>" + 
																max_weight_last_year + " kg<br></b>" + "at the date : <br><b>" + max_weight_date +"</b><br>";
	if (question_parameters[3]!="no dates specified")
	{
		if (question_parameters.length == 4)
		{
			for (var i = 0 ; i < max_weight_month.length ; i++)
			{
				if (max_weight_month[i].date == question_parameters[3])
				{
					document.getElementById('information_container').innerHTML += "Your maximum weight at the date : <b>" + question_parameters[3] + "</b><br>was <b>" + max_weight_month[i].max + " kg<br></b>";
				}
			}
		}
	}
}

//001
function max_speed_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "Your maximum speed last year was <b><br>" + max_speed_vehicle_year + " km/h<br></b>";

	if (question_parameters[3]!="no dates specified")
	{
		if (question_parameters.length == 4)
		{
			for (var i = 0 ; i < max_speed_vehicle_day.length ; i++)
			{
				if (max_speed_vehicle_day[i].date == question_parameters[3])
				{
					if(max_speed_vehicle_day[i].max == 0)
					{
						document.getElementById('information_container').innerHTML += "You didn't drive at the date : <b>" + question_parameters[3] ;
					}
					if(max_speed_vehicle_day[i].max != 0)
					{
						document.getElementById('information_container').innerHTML += "Your maximum speed at the date : <b>" + question_parameters[3] + "</b><br>was <b>" + max_speed_vehicle_day[i].max + " km/h<br></b>";
					}
				}
			}
		}
	}
}

//010
function avg_weight_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "Your last registered weight is : <br><b>" + current_weight + " kg<br></b>";
	var avg_weight_last_year = 0;

	for (var i = 0 ; i < avg_weight_month.length; i++)
	{
		avg_weight_last_year += avg_weight_month[i].avg;
	}
	avg_weight_last_year /= avg_weight_month.length;

	document.getElementById('information_container').innerHTML += "Your average weight last year was : <b><br>" + avg_weight_last_year.toFixed(3) + " kg</b><br>";

	if (question_parameters[3]!="no dates specified")
	{
		if (question_parameters.length == 4)
		{
			for (var i = 0 ; i < avg_weight_month.length ; i++)
			{
				if (avg_weight_month[i].date == question_parameters[3])
				{
					document.getElementById('information_container').innerHTML += "Your average weight at the date : <b>" + question_parameters[3] + "</b><br>was <b>" + avg_weight_month[i].avg + " kg<br></b>";
				}
			}
		}
	}
}

//012
function avg_distance_and_steps_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The distance you walked last year is <br><b>" + sum_distance_last_year.toFixed(3) + " km<br></b>";
	document.getElementById('information_container').innerHTML += "Which means the average distance you walked each day was <br><b>" + (sum_distance_last_year/365).toFixed(3) + " km<br></b>";

}

//100
function weather_indoor_data_treatment(question_parameters)
{
	console.log("function case :100");
}

//101
function weather_outdoor_data_treatment(question_parameters)
{
	console.log("function case :101");
}

//110
function temperature_indoor_data_treatment(question_parameters)
{
	console.log("function case :110");
}

//111
function temperature_outdoor_data_treatment(question_parameters)
{
	console.log("function case :111");
}