/**
 * Created by amineyouness on 23/01/2018.
 */




function avg_distance_data_treatment()
{
    document.getElementById('distance_information').innerHTML = sum_distance_last_year.toFixed(3) + " km";

}


function avg_steps_data_treatment()
{

    var avg_steps_each_month = 0;



    for (var i = 0 ; i < avg_steps_month.length ; i++)
    {
        avg_steps_each_month += avg_steps_month[i].avg;
    }


    document.getElementById('steps_information').innerHTML =  avg_steps_each_month.toFixed(3) + " steps";


}


function weight_data_treatment()
{
    document.getElementById('weight_information').innerHTML = current_weight + " kg";

}

function weather_data_treatment()
{
    document.getElementById('humidity_container').innerHTML = current_outdoor_humidity.toFixed(3) + "<br></b>";

    document.getElementById('humidity_container_car').innerHTML = current_outdoor_humidity.toFixed(3) + "<br></b>";



}

function temperature_data_treatment()
{
    document.getElementById('temperature_container').innerHTML = current_outdoor_temperature.toFixed(3) + " °C<br></b>";
    document.getElementById('temperature_container_car').innerHTML = current_outdoor_temperature.toFixed(3) + " °C<br></b>";


}


// function called with What maximum speed
function max_speed()
{
    document.getElementById('information_speed_max').innerHTML =  max_speed_vehicle_year + " km/h<br></b>";

    /*if (question_parameters.length == 4)
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


    }*/
}






