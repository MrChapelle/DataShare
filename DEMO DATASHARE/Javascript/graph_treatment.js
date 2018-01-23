/**
 * Created by amineyouness on 23/01/2018.
 */

function avg_distance_data_treatment(question_parameters)
{
    document.getElementById('distance_information').innerHTML = sum_distance_last_year.toFixed(3) + " km";





}


function avg_steps_data_treatment(question_parameters)
{

    var avg_steps_each_month = 0;

    for (var i = 0 ; i < avg_steps_month.length ; i++)
    {
        avg_steps_each_month += avg_steps_month[i].avg;
    }


    document.getElementById('steps_information').innerHTML +=  avg_steps_each_month.toFixed(3) + " steps";


}


function weight_data_treatment(question_parameters)
{
    document.getElementById('weight_information').innerHTML = current_weight + " kg";

}
