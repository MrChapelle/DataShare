// Each Question (input) can be send with 0 , 1 or 2 dates , manually or using words like : 'last year' -> two dates ; 'yesterday'-> one date ...

//000
// function called with : What maximum weight
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

		if (question_parameters.length == 5)
		{
			question_parameters = orderQuestionParameters (question_parameters);
			document.getElementById('information_container').innerHTML += "You asked for your weight between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";

			for ( var i = 0 ; i < avg_weight_month.length ; i++)
			{
				if (compareTwoIsoDates (question_parameters[3], avg_weight_month[i].date))
				{
					if (compareTwoIsoDates (avg_weight_month[i].date,question_parameters[4]))
					{
						document.getElementById('information_container').innerHTML += "Date : <b>" + avg_weight_month[i].date + "</b> Maximum Weight : <b>" + avg_weight_month[i].avg + "</b><br>";
					}
				}
			}
		}
	}
}

//001
// function called with What maximum speed
function max_speed_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "Your maximum speed last year was <b><br>" + max_speed_vehicle_year + " km/h<br></b>";

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
					document.getElementById('information_container').innerHTML += "Your maximum speed at the date : <b>" + question_parameters[3] + "</b><br>was <b>" + max_speed_vehicle_day[i].max.toFixed(2) + " km/h<br></b>";
					break;
				}
			}
		}
	}
	
	if (question_parameters.length == 5)
	{
		question_parameters = orderQuestionParameters (question_parameters);
		document.getElementById('information_container').innerHTML += "You asked for your maximum speed between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";
		for ( var i = 0 ; i < max_speed_vehicle_day.length ; i++)
		{
			if (compareTwoIsoDates (question_parameters[3], max_speed_vehicle_day[i].date))
			{
				if (compareTwoIsoDates (max_speed_vehicle_day[i].date,question_parameters[4]))
				{
					document.getElementById('information_container').innerHTML += "Date : <b>" + max_speed_vehicle_day[i].date + "</b> Max Speed : <b>" + max_speed_vehicle_day[i].max.toFixed(2) + " km/h</b><br>";
				}
			}
		}
	}
}

//010
// function called with What average weight
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
	if (question_parameters.length == 5)
	{
		question_parameters = orderQuestionParameters (question_parameters);
		document.getElementById('information_container').innerHTML += "You asked for your average weight between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";
		for ( var i = 0 ; i < avg_weight_month.length ; i++)
		{
			if (compareTwoIsoDates (question_parameters[3], avg_weight_month[i].date))
			{
				if (compareTwoIsoDates (avg_weight_month[i].date,question_parameters[4]))
				{
					document.getElementById('information_container').innerHTML += "Date : <b>" + avg_weight_month[i].date + "</b> Average Weight : <b>" + avg_weight_month[i].avg.toFixed(2) + " kg</b><br>";
				}
			}
		}
	}
}

//012
// function called with What average distance
function avg_distance_and_steps_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The distance you've moved today is : <br><b>" + distance_today.toFixed(1) + " km<br></b>";
	document.getElementById('information_container').innerHTML += "The distance you've moved last year is : <br><b>" + sum_distance_last_year.toFixed(1) + " km<br></b>";
	document.getElementById('information_container').innerHTML += "Which means the average distance you walked each day was : <br><b>" + (sum_distance_last_year/365).toFixed(3) + " km<br></b>";

	var avg_distance_each_month = 0;
	
	for (var i = 0 ; i < average_distance_each_month.length ; i++)
	{
		avg_distance_each_month += average_distance_each_month[i].avg;
	}
	avg_distance_each_month /= 12;
	document.getElementById('information_container').innerHTML += "Each month you've moved an average distance of : <br><b> " + avg_distance_each_month.toFixed(1) + " km<br></b>";

	var avg_steps_each_month = 0;

	for (var i = 0 ; i < avg_steps_month.length ; i++)
	{
		avg_steps_each_month += avg_steps_month[i].avg;
	}
	avg_steps_each_month /= 12;
	document.getElementById('information_container').innerHTML += "Each month you walked an average number of steps of : <br><b> " + avg_steps_each_month.toFixed(1) + " steps<br></b>";

	if (question_parameters.length == 4)
	{
		for (var i = 0 ; i < average_distance_each_day.length ; i++)
		{
			if (average_distance_each_day[i].date == question_parameters[3])
			{
				document.getElementById('information_container').innerHTML += "You also asked the distance you walked at the date : <br><b> " + average_distance_each_day[i].date + 
				"</b><br> which is : <br><b> " + (average_distance_each_day[i].avg).toFixed(1) + " km</b><br>";
				break;
			}
		}
	}
	if (question_parameters.length == 5)
	{
		question_parameters = orderQuestionParameters (question_parameters);
		document.getElementById('information_container').innerHTML += "You asked for your average walked distance between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";
		for ( var i = 0 ; i < average_distance_each_day.length ; i++)
		{
			if (compareTwoIsoDates (question_parameters[3], average_distance_each_day[i].date))
			{
				if (compareTwoIsoDates (average_distance_each_day[i].date,question_parameters[4]))
				{
					document.getElementById('information_container').innerHTML += "Date : <b>" + average_distance_each_day[i].date + "</b> Average Distance : <b>" + average_distance_each_day[i].avg.toFixed(1) + " km</b><br>";
				}
			}
		}
	}
}

//100
// function called with Could weather indoor
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
	if (question_parameters.length == 5)
	{
		question_parameters = orderQuestionParameters (question_parameters);
		document.getElementById('information_container').innerHTML += "You asked for your indoor humidity between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";
		for ( var i = 0 ; i < avg_indoor_humidity_day.length ; i++)
		{
			if (compareTwoIsoDates (question_parameters[3], avg_indoor_humidity_day[i].date))
			{
				if (compareTwoIsoDates (avg_indoor_humidity_day[i].date,question_parameters[4]))
				{
					document.getElementById('information_container').innerHTML += "Date : <b>" + avg_indoor_humidity_day[i].date + "</b> Average Indoor Humidity : <b>" + avg_indoor_humidity_day[i].avg.toFixed(2) + " </b><br>";
				}
			}
		}
	}
}

//101
// function called with Could weather outdoor
function weather_outdoor_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The last registered outdoor humidity is : <br><b>" + current_outdoor_humidity.toFixed(3) + "<br></b>";

	avg_humidity_last_year = 0 ;

	for (var i = 0 ; i < avg_outdoor_humidity_day.length ; i++)
	{
		avg_humidity_last_year += avg_outdoor_humidity_day[i].avg;
	}
	avg_humidity_last_year /= avg_outdoor_humidity_day.length;

	document.getElementById('information_container').innerHTML = "Last year the average outdoor humidity was : <br><b>" + avg_humidity_last_year.toFixed(3) + "<br></b>";

	var asked_humidity = 0;

	if (question_parameters.length == 4)
	{
		for (var i = 0 ; i < avg_outdoor_humidity_day.length ; i++)
		{
			if (avg_outdoor_humidity_day[i].date == question_parameters[3])
			{
				document.getElementById('information_container').innerHTML += "You also asked the outdoor humidity at the date : <br><b> " + avg_outdoor_humidity_day[i].date + 
				"</b><br> which is : <br><b> " + (avg_outdoor_humidity_day[i].avg).toFixed(3) + " </b><br>";
				document.getElementById('information_container').innerHTML += "Luminosity outside is <b>not defined</b> at this date <br>";
				break;
			}
		}
	}
	if (question_parameters.length == 5)
	{
		question_parameters = orderQuestionParameters (question_parameters);
		document.getElementById('information_container').innerHTML += "You asked for your outdoor humidity between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";
		for ( var i = 0 ; i < avg_outdoor_humidity_day.length ; i++)
		{
			if (compareTwoIsoDates (question_parameters[3], avg_outdoor_humidity_day[i].date))
			{
				if (compareTwoIsoDates (avg_outdoor_humidity_day[i].date,question_parameters[4]))
				{
					document.getElementById('information_container').innerHTML += "Date : <b>" + avg_outdoor_humidity_day[i].date + "</b> Average Outdoor Humidity : <b>" + avg_outdoor_humidity_day[i].avg.toFixed(2) + " </b><br>";
				}
			}
		}
	}
}

//110
// function called with Could temperature indoor
function temperature_indoor_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The last registered indoor temperature is : <br><b>" + current_indoor_temperature + " °C<br></b>";
	document.getElementById('information_container').innerHTML += "The max indoor temperature registered in 2018 is : <br><b>" + max_indoor_temperature_year_2018 + " °C<br></b>";
	document.getElementById('information_container').innerHTML += "The max indoor temperature registered in 2017 is : <br><b>" + max_indoor_temperature_year_2017 + " °C<br></b>";

	var avg_temp_indoor = 0;

	for ( var i = 0 ; i < avg_indoor_temperature_day.length; i++)
	{
		avg_temp_indoor += avg_indoor_temperature_day[i].avg;
	}
	avg_temp_indoor /= avg_indoor_temperature_day.length

	document.getElementById('information_container').innerHTML += "The average indoor temperature registered in 2018 is : <br><b>" + avg_temp_indoor.toFixed(2) + " °C<br></b>";

	if (question_parameters.length == 4)
	{
		for (var i = 0 ; i < avg_indoor_temperature_day.length ; i++)
		{
			if (avg_indoor_temperature_day[i].date == question_parameters[3])
			{
				document.getElementById('information_container').innerHTML += "You also asked the outdoor humidity at the date : <br><b> " + avg_indoor_temperature_day[i].date + 
				"</b><br> which is : <br><b> " + (avg_indoor_temperature_day[i].avg).toFixed(3) + " </b><br>";
				document.getElementById('information_container').innerHTML += "Luminosity outside is <b>not defined</b> at this date <br>";
				break;
			}
		}
	}
	if (question_parameters.length == 5)
	{
		question_parameters = orderQuestionParameters (question_parameters);
		document.getElementById('information_container').innerHTML += "You asked for your indoor temperature between the dates : <br><b>" + question_parameters[3] + "</b> and <b>" + question_parameters[4] + "</b><br>";
		for ( var i = 0 ; i < avg_indoor_temperature_day.length ; i++)
		{
			if (compareTwoIsoDates (question_parameters[3], avg_indoor_temperature_day[i].date))
			{
				if (compareTwoIsoDates (avg_indoor_temperature_day[i].date,question_parameters[4]))
				{
					document.getElementById('information_container').innerHTML += "Date : <b>" + avg_indoor_temperature_day[i].date + "</b> Average Indoor Temperature : <b>" + avg_indoor_temperature_day[i].avg.toFixed(2) + " °C</b><br>";
				}
			}
		}
	}
}

//111
// function called with Could temperature outdoor
function temperature_outdoor_data_treatment(question_parameters)
{
	document.getElementById('information_container').innerHTML = "The last registered outdoor temperature is : <br><b>" + current_outdoor_temperature.toFixed(3) + " °C<br></b>";
	var avg_temp_outdoor = 0;

	for ( var i = 0 ; i < avg_outdoor_temperature_month.length; i++)
	{
		avg_temp_outdoor += avg_outdoor_temperature_month[i].avg;
	}
	avg_temp_outdoor /= avg_outdoor_temperature_month.length

	document.getElementById('information_container').innerHTML += "The average outdoor temperature registered in 2017 is : <br><b>" + avg_temp_outdoor.toFixed(3) + " °C<br></b>";

	if (question_parameters.length == 4)
	{
		document.getElementById('information_container').innerHTML += "Data missing at the date : <b> " + question_parameters[3] + "</b><br>";
	}
	if (question_parameters.length == 5)
	{
		document.getElementById('information_container').innerHTML += "Outdoor data missing between the date : <b> " + question_parameters[3] + "</b> and the date : <b>" + question_parameters[4]
		+"</b> <br> Please check your device is turned on :) !!!";
	}
}