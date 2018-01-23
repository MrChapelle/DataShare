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

	console.log(question_parameters);

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
					avg_distance_and_steps_data_treatment(question_parameters)
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