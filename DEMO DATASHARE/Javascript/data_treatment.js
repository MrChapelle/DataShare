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
						break;
					}
					if(max_speed_vehicle_day[i].max != 0)
					{
						document.getElementById('information_container').innerHTML += "Your maximum speed at the date : <b>" + question_parameters[3] + "</b><br>was <b>" + max_speed_vehicle_day[i].max + " km/h<br></b>";
						break;
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
					break;
				}
			}
		}
	}
}

//012
function avg_distance_and_steps_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The distance you walked last year is : <br><b>" + sum_distance_last_year.toFixed(3) + " km<br></b>";
	document.getElementById('information_container').innerHTML += "Which means the average distance you walked each day was : <br><b>" + (sum_distance_last_year/365).toFixed(3) + " km<br></b>";

	var avg_distance_each_month = 0;
	
	for (var i = 0 ; i < average_distance_each_month.length ; i++)
	{
		avg_distance_each_month += average_distance_each_month[i].avg;
	}
	average_distance_each_month /= 12;
	document.getElementById('information_container').innerHTML += "Each month you walked an average distance of : <br><b> " + avg_distance_each_month.toFixed(3) + " km<br></b>";

	var avg_steps_each_month = 0;

	for (var i = 0 ; i < avg_steps_month.length ; i++)
	{
		avg_steps_each_month += avg_steps_month[i].avg;
	}
	avg_steps_each_month /= 12;
	document.getElementById('information_container').innerHTML += "Each month you walked an average number of steps of : <br><b> " + avg_steps_each_month.toFixed(3) + " steps<br></b>";

	if (question_parameters[3] != "no dates specified")
	{
		if (question_parameters.length == 4)
		{
			for (var i = 0 ; i < average_distance_each_day.length ; i++)
			{
				if (average_distance_each_day[i].date == question_parameters[3])
				{
					document.getElementById('information_container').innerHTML += "You also asked the distance you walked at the date : <br><b> " + average_distance_each_day[i].date + 
					"</b><br> which is : <br><b> " + (average_distance_each_day[i].avg).toFixed(3) + " km</b><br>";
					break;
				}
			}
		}
	}
}

//100
function weather_indoor_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The last registered illuminance is : <br><b>" + current_illuminance.toFixed(3) + "<br></b>";
	document.getElementById('information_container').innerHTML += "The last registered humidity is : <br><b>" + current_humidity.toFixed(3) + "<br></b>";
	document.getElementById('information_container').innerHTML += "The maximum registered indoor humidity last year was : <br><b>" + max_indoor_humidity_year_2017 + "<br></b>";

	var avg_indoor_humidity = 0;
	var avg_indoor_luminosity = 0;

	for (var i = 0 ; i < avg_indoor_humidity_day.length ; i++)
	{
		avg_indoor_humidity += avg_indoor_humidity_day[i].avg;
	}
	avg_indoor_humidity /= avg_indoor_humidity_day.length;

	for (var i = 0 ; i <  avg_indoor_illuminance_day_2018.length ; i++)
	{
		avg_indoor_luminosity +=  avg_indoor_illuminance_day_2018[i].avg;
	}
	avg_indoor_luminosity /=  avg_indoor_illuminance_day_2018.length;


	document.getElementById('information_container').innerHTML += "The average indoor humidity is : <br><b> " + avg_indoor_humidity.toFixed(3) + " <br></b>";
	document.getElementById('information_container').innerHTML += "The average indoor luminosity is : <br><b> " + avg_indoor_luminosity.toFixed(3) + " <br></b>";

	if (question_parameters[3] != "no dates specified")
	{
		if (question_parameters.length == 4)
		{
			for (var i = 0 ; i < avg_indoor_humidity_day.length ; i++)
			{
				if (avg_indoor_humidity_day[i].date == question_parameters[3])
				{
					document.getElementById('information_container').innerHTML += "You also asked the indoor humidity at the date : <br><b> " + avg_indoor_humidity_day[i].date + 
					"</b><br> which is : <br><b> " + (avg_indoor_humidity_day[i].avg).toFixed(3) + " </b><br>";
					document.getElementById('information_container').innerHTML += "Luminosity is <b>not defined</b> at this date <br>";
					break;
				}
			}
		}
	}
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