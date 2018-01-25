/* @authors  : You Robin - Youness Amine
   @date     : 15/01/2018             */

 var client_ID = "TmBdakal55IVwwikEPpMvmWGPDtpIO4F";
 var client_secret = "AnOJ8XcU7VHb3t4g";
 var application_id = "hlCskxHa4TkzSyX8";
 var redirect_uri = "http%3A%2F%2Fwww.host"



function main_function()
{
	var input = document.getElementById('question_content').value;
	var question_parameters = analyse_string(input);		
	var size = question_parameters.length;



    avg_steps_data_treatment();
    avg_distance_data_treatment();
    weight_data_treatment();

    temperature_data_treatment();
    weather_data_treatment();
    max_speed();


    if (size!=0)
	{
		var main_case = question_parameters[0];
		var minor_case = question_parameters[1];
		var complement = question_parameters[2];

		if (main_case == 0)
		{
			if (minor_case==0)
			{
				if (complement==0)
				{
					// What maximum weight
					max_weight_data_treatment(question_parameters);	
					// Amine function :


				}
				if (complement==1)
				{
					// What maximum speed
					max_speed_data_treatment(question_parameters);
					// Amine function :

				}
			}
			if (minor_case == 1)
			{
				if (complement==0)
				{
					// What average weight
					avg_weight_data_treatment(question_parameters);
					// Amine function :




				}
				if (complement==2)
				{
					// What average distance
					avg_distance_and_steps_data_treatment(question_parameters);
					// Amine function :





                }
			}			
		}
		if (main_case == 1)
		{
			if (minor_case == 0)
			{
				if (complement==0)
				{
					weather_indoor_data_treatment(question_parameters);
				}
				if (complement==1)
				{
					weather_outdoor_data_treatment(question_parameters);
				}
			}
			if (minor_case == 1)
			{
				if (complement==0)
				{
					temperature_indoor_data_treatment(question_parameters);
				}
				if (complement==1)
				{
					temperature_outdoor_data_treatment(question_parameters);
				}
			}
		}	
	}


}


$(document).ready(function(){
    $('#card-home').show();
    $('#card-stats-body').hide();
    $('#card-car').hide();



});


$(document).ready(function(){
    $('#card-click-body').click(function(){
        $('#card-home').hide();
        $('#card-stats-body').show();

    });

});

$(document).ready(function(){
    $('#card-click-car').click(function(){
        $('#card-home').hide();
        $('#card-car').show();




    });

});

$(document).ready(function(){
    $('#retour').click(function(){
        $('#card-home').show();
        $('#card-stats-body').hide();

    });

});

$(document).ready(function(){
    $('#retour2').click(function(){
        $('#card-home').show();
        $('#card-car').hide();

    });

});

/* CONNEXION PART */

function getResp()
{	theUrl = "https%3A%2F%2Fdatashare.orange.com%2Fapi%2Fv2%2Fusers%2Fme%2Fdata%2Fstats%2Fvehicle%2Fspeed%3Ffields%3Dmax%26interval%3Dday%26timestamp%3D2011-01-01T00%253A00%253A00.000Z%252C2018-02-01T00%253A00%253A00.000Z";
	$.ajax({
		url : theUrl,
		datatype : 'jsonp',
		type : 'get',
		success : function(data) {
			alert("success");
			var json_response = data;
			alert(data);
		},
		error : function() {
			alert("error request");
		}
	})
}