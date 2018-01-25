/* CHATBOT PART */

function analyse_string(input)
{
	var question_parameters = [];
	var basic = check_basic_string(input);
	if (basic)
	{
		var analyse_first = ['What', 'Could'];

		var what_first = ['maximum', 'average', 'minimum'];
		var what_second = ['weight', 'speed', 'distance'];

		var could_first = ['weather', 'temperature'];
		var could_second = ['indoor', 'outdoor'];

		var main_case = 0;
		var minor_case = 0;
		var complement = 0;

		var dates = extract_dates(input);
		complete_dates(dates, input);

		if (dates.length == 0)
		{
			dates.push("no dates specified");
		}


		while (input.search(analyse_first[main_case])==-1){main_case +=1 ;}

		if (main_case >= analyse_first.length) { document.getElementById('information_container').innerHTML = "Please specify your question using a 'What' or 'Could' word :)"; }
		
		if (main_case == 0)
		{
			while (input.search(what_first[minor_case])==-1){minor_case +=1;}
			while (input.search(what_second[complement])==-1){complement +=1;}

			if ((minor_case >= what_first.length)||(complement >= what_second.length))
			{ document.getElementById('information_container').innerHTML = "I do not have the data needeed to answer your question"; }

			if (minor_case == 0)
			{
				if (complement == 0)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,0,0,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];
						question_parameters = [0,0,0,dates[0],dates[1]];						
					}
				}

				if (complement == 1)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,0,1,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];
						question_parameters = [0,0,1,dates[0],dates[1]];						
					}
				}

				if (complement == 2)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,0,2,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];	
						question_parameters = [0,0,2,dates[0],dates[1]];					
					}
				}
			}

			if (minor_case == 1)
			{
				if (complement == 0)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,1,0,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];
						question_parameters = [0,1,0,dates[0],dates[1]];						
					}
				}

				if (complement == 1)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,1,1,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];
						question_parameters = [0,1,1,dates[0],dates[1]];						
					}
				}

				if (complement == 2)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,1,2,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];	
						question_parameters = [0,1,2,dates[0],dates[1]];					
					}					
				}
			}

			if (minor_case == 2)
			{
				if (complement == 0)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,2,0,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];	
						question_parameters = [0,2,0,dates[0],dates[1]];					
					}
				}

				if (complement == 1)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,2,1,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];		
						question_parameters = [0,2,1,dates[0],dates[1]];				
					}
				}

				if (complement == 2)
				{					
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [0,2,2,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + what_first[minor_case] +
						" " + what_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];	
						question_parameters = [0,2,2,dates[0],dates[1]];					
					}
				}
			}
		}

		if (main_case == 1)
		{
			while (input.search(could_first[minor_case])==-1){minor_case +=1;}
			while (input.search(could_second[complement])==-1){complement +=1;}

			if ((minor_case >= could_first.length)||(complement >= could_second.length))
			{ document.getElementById('information_container').innerHTML = "I do not have the data needeed to answer your question"; }

			if (minor_case == 0)
			{
				if (complement == 0)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [1,0,0,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];	
						question_parameters = [1,0,0,dates[0],dates[1]];					
					}
				}

				if (complement == 1)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [1,0,1,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];
						question_parameters = [1,0,1,dates[0],dates[1]];						
					}
				}
			}

			if (minor_case == 1)
			{
				if (complement == 0)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [1,1,0,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];		
						question_parameters = [1,1,0,dates[0],dates[1]];				
					}
				}

				if (complement == 1)
				{
					if (dates.length==1)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " at the date : " + dates[0] ;
						question_parameters = [1,1,1,dates[0]];
					}
					if (dates.length==2)
					{
						document.getElementById('information_container').innerHTML = "Your question is a " + analyse_first[main_case] + " question, your are looking for your " + could_first[minor_case] +
						" " + could_second[complement] + " from the date : " + dates[0] + " to the date : " + dates[1];	
						question_parameters = [1,1,1,dates[0],dates[1]];					
					}
				}
			}
		}


		if (dates.length>2)
		{
			document.getElementById('information_container').innerHTML = "Too many dates in your request !";
			question_parameters = [];
		}
	}

	return question_parameters;
}

function check_basic_string(input)
{
	result = false;

	if (input.length == 0)
	{
		document.getElementById('information_container').innerHTML = "You asked nothing, how can I help you ?" ;
		return result;
	}

	if (input.search('Hello')!=-1||input.search('hello')!=-1)
	{
		document.getElementById('information_container').innerHTML = "Hello, Nice to meet you ! :) ";
		return result;
	}

	if ((input.search('my name is')!= -1)||(input.search('My name is')!= -1))
	{
		document.getElementById('information_container').innerHTML = "I am Amine, nice to meet you too !";
		return result;
	}

	if ((input.search('are you')!=-1)||(input.search('Are you')!=-1))
	{
		document.getElementById('information_container').innerHTML = "I don't know what I am but one thing is pretty sure, I AM NOT a robot :) , how can I help you now ?";
		return result;
	}

	if ((input.search('do you think')!=-1)||(input.search('Do you think')!=-1))
	{
		document.getElementById('information_container').innerHTML = "The only think I know is that you are wonderful, but if I can help you some way, just tell me";
		return result;
	}

	if ((input.search('fuck')!=-1)||(input.search('shit')!=-1)||(input.search('bitch')!=-1)||(input.search('sex')!=-1))
	{
		document.getElementById('information_container').innerHTML = "*** *** ****** ***** ******* ** ***** ********** ************* * you're welcome ! ";
		return result;
	}
	if ((input.search('raining')!=-1)||(input.search('go out')!=-1))
	{
		document.getElementById('information_container').innerHTML = "I don't think it's raining, you can go outside";
		return result;
	}
	if ((input.search('Bye')!=-1)||(input.search('bye')!=-1)||(input.search('see you later')!=-1)||(input.search('See you later')!=-1))
	{
		document.getElementById('information_container').innerHTML = "Goodbye, see you later !";
		return result;
	}
	if (input.search('Thank you')!=-1||input.search('thank you')!=-1)
	{
		document.getElementById('information_container').innerHTML = "Hello, Nice to meet you ! :) ";
		return result;
	}
	if (input.search('tired')!=-1||input.search('sleep')!=-1)
	{
		document.getElementById('information_container').innerHTML = "Good Night my friend ! I'm going to sleep too ! We wezd ... zzzzzzzzzz ....";
		return result;
	}
	result = true;
	return result;	
}


function extract_dates(input)
{
	var re = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})Z/;

	var re_length = 20;
	var dates = [];
	var max_dates = 0;

	while(input.search(re)!=-1 && max_dates <=input.length)
	{
		var index = input.search(re);
		var date = input.slice(index , index + re_length);
		dates.push(date);
		max_dates += 1;
		input = input.replace(date, "old_date");
	}

	return dates;
}

function complete_dates(dates, input)
{
	var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
	if (dates.length == 0)
	{
		if(input.search('yesterday')!=-1)
		{
			var d = new Date();
			d.setDate(d.getDate() - 1);
			var n = d.toISOString();
			dates.push(n);			
		}
		if(input.search('today')!=-1)
		{
			var d = new Date();
			var n = d.toISOString();
			dates.push(n);
		}
		if(input.search('tomorrow')!=-1)
		{
			var d = new Date();
			d.setDate(d.getDate() + 1);
			var n = d.toISOString();
			dates.push(n);
		}
		if((input.search('last week')!=-1)||(input.search('this week')!=-1))
		{
			var d = new Date();
			var n = d.toISOString();
			d.setDate(d.getDate() - 7);
			var m = d.toISOString();
			dates.push(m);
			dates.push(n);
		}
		if((input.search('last month')!=-1)||(input.search('this month')!=-1))
		{
			var d = new Date();
			var n = d.toISOString();
			d.setDate(d.getDate() - 30);
			var m = d.toISOString();
			dates.push(m);
			dates.push(n);
		}
		if((input.search('last year')!=-1)||(input.search('this year')!=-1))
		{
			var d = new Date();
			var n = d.toISOString();
			d.setFullYear(d.getFullYear() - 1);
			var m = d.toISOString();
			dates.push(m);
			dates.push(n);
		}
		for (var i = 0 ; i < days.length ; i++)
		{
			if(input.search(days[i])!=-1)
			{
				var j = i + 1;
				var d = new Date();
				var d_num = d.getDay();
				if (d_num >= j)
				{
					var delta = d_num - j;
				}
				if (d_num < j)
				{
					var delta = 7 - Math.abs(d_num - j);
				}
				d.setDate(d.getDate() - delta);
				var n = d.toISOString();
				dates.push(n);
			}				
		}
	}
	return dates;
}

function compareTwoIsoDates (d1, d2)
{
	// function which test if date1 if before date2
	// return true if it is the case and false otherwise
	var response = true;

	if(d1[0]>d2[0])
	{
		response = false;
		return response;
	}

	if (d1[0]==d2[0])
	{
		if(d1[1]>d2[1])
		{
			response = false;
			return response;
		}
		if(d1[1]==d2[1])
		{
			if(d1[2]>d2[2])
			{
				response = false;
				return response;
			}
			if(d1[2]==d2[2])
			{
				if(d1[3]>d2[3])
				{
					response = false;
					return response;
				}
				if(d1[3]==d2[3])
				{
					if(d1[5]>d2[5])
					{
						response = false;
						return response;
					}
					if(d1[5]==d2[5])
					{
						if(d1[6]>d2[6])
						{
							response = false;
							return response;
						}
						if(d1[6]==d2[6])
						{
							if(d1[8]>d2[8])
							{
								response = false;
								return response;
							}
							if(d1[8]==d2[8])
							{
								if(d1[9]>d2[9])
								{
									response = false;
									return response;
								}
							}
						}
					}
				}
			}
		}
	}
	return response;
}

function orderQuestionParameters (question_parameters)
{
	if (question_parameters.length != 5)
	{
		return question_parameters;
	}

	if (compareTwoIsoDates(question_parameters[3],question_parameters[4]))
	{
		return question_parameters;
	}

	var q3 = question_parameters[3];
	var q4 = question_parameters[4];

	question_parameters[3] = q4;
	question_parameters[4] = q3;

	return question_parameters;
}