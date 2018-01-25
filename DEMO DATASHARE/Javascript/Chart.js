var tab_distance_avg = [];
var tab_distance_dates = [];

var average_distance_each_month =
    [
        {
            "date": "2017-12-01",
            "avg": 98.60000014305115
        },
        {
            "date": "2017-11-01",
            "avg": 136.729
        },
        {
            "date": "2017-10-01",
            "avg": 159.0999960899353
        },
        {
            "date": "2017-09-01",
            "avg": 97.80000150203705
        },
        {
            "date": "2017-08-01",
            "avg": 144.09999549388885
        },
        {
            "date": "2017-07-01",
            "avg": 85.90000122785568
        },
        {
            "date": "2017-06-01",
            "avg": 437.3399963378906
        },
        {
            "date": "2017-05-01",
            "avg": 143.79749999999999
        },
        {
            "date": "2017-04-01",
            "avg": 192.892
        },
        {
            "date": "2017-03-01",
            "avg": 192.892
        },
        {
            "date": "2017-02-01",
            "avg": 296.22998046875
        },
        {
            "date": "2017-01-01",
            "avg": 290.239990234375
        }
    ];

for (var i = 0 ; i < average_distance_each_month.length ; i++)
{
    tab_distance_avg.push(average_distance_each_month[i].avg.toFixed(3));
    tab_distance_dates.push(average_distance_each_month[i].date);
}

tab_distance_avg = tab_distance_avg.reverse();
tab_distance_dates = tab_distance_dates.reverse();


var avg_steps_month =
    [
        {
            "date": "2017-12-01T00:00:00Z",
            "avg": 26546.3842220599
        },
        {
            "date": "2017-11-01T00:00:00Z",
            "avg": 37814.360770577935
        },
        {
            "date": "2017-10-01T00:00:00Z",
            "avg": 40625.566343042074
        },
        {
            "date": "2017-09-01T00:00:00Z",
            "avg": 29759.519038076153
        },
        {
            "date": "2017-08-01T00:00:00Z",
            "avg": 43156.60262275084
        },
        {
            "date": "2017-07-01T00:00:00Z",
            "avg": 38906.98701528134
        },
        {
            "date": "2017-06-01T00:00:00Z",
            "avg": 31684.09761330115
        },
        {
            "date": "2017-05-01T00:00:00Z",
            "avg": 33257.30776391733
        },
        {
            "date": "2017-04-01T00:00:00Z",
            "avg": 24361.21169301422
        },
        {
            "date": "2017-03-01T00:00:00Z",
            "avg": 27886.703520512075
        },
        {
            "date": "2017-02-01T00:00:00Z",
            "avg": 69125.65399372166
        },
        {
            "date": "2017-01-01T00:00:00Z",
            "avg": 61734.111665568214
        }
    ];

var tab_steps_avg = [];
var tab_steps_dates = [];

for (var i = 0 ; i < avg_steps_month.length ; i++)
{
    tab_steps_avg.push(avg_steps_month[i].avg.toFixed(3));
    tab_steps_dates.push(avg_steps_month[i].date);
}

tab_steps_avg = tab_steps_avg.reverse();
tab_steps_dates = tab_steps_dates.reverse();



var avg_weight_month =
    [
        {
            "date": "2017-12-01T00:00:00Z",
            "avg": 83.507
        },
        {
            "date": "2017-11-01T00:00:00Z",
            "avg": 84.724
        },
        {
            "date": "2017-10-01T00:00:00Z",
            "avg": 84.123
        },
        {
            "date": "2017-09-01T00:00:00Z",
            "avg": 86.364
        },
        {
            "date": "2017-08-01T00:00:00Z",
            "avg": 83.324
        },
        {
            "date": "2017-07-01T00:00:00Z",
            "avg": 79.875
        },
        {
            "date": "2017-06-01T00:00:00Z",
            "avg": 83.507
        },
        {
            "date": "2017-05-01T00:00:00Z",
            "avg": 84.724
        },
        {
            "date": "2017-04-01T00:00:00Z",
            "avg": 81.659
        },
        {
            "date": "2017-03-01T00:00:00Z",
            "avg": 79.983
        },
        {
            "date": "2017-02-01T00:00:00Z",
            "avg": 80.362
        },
        {
            "date": "2017-01-01T00:00:00Z",
            "avg": 79.850
        }
    ];

var tab_weight_avg = [];
var tab_weight_dates = [];

for (var i = 0 ; i < avg_weight_month.length ; i++)
{
    tab_weight_avg.push(avg_weight_month[i].avg);
    tab_weight_dates.push(avg_weight_month[i].date);
}

tab_weight_avg = tab_weight_avg.reverse();
tab_weight_dates = tab_weight_dates.reverse();


var max_speed_vehicle_month =
    [
        {
            "date": "2018-01-01",
            "max": 135.98999
        },
        {
            "date": "2017-12-01",
            "max": 121.29
        },
        {
            "date": "2017-11-01",
            "max": 132.03
        },
        {
            "date": "2017-10-01",
            "max": 145.65
        },
        {
            "date": "2017-09-01",
            "max": 112.25
        },
        {
            "date": "2017-08-01",
            "max": 143.91
        },
        {
            "date": "2017-07-01",
            "max": 132.28
        },
        {
            "date": "2017-06-01",
            "max": 130.83
        },
        {
            "date": "2017-05-01",
            "max": 116.42
        },
        {
            "date": "2017-04-01",
            "max": 129.45
        },
        {
            "date": "2017-03-01",
            "max": 114.509995
        }
    ];


var tab_speed_max = [];
var tab_speed_dates = [];

for (var i = 0 ; i < max_speed_vehicle_month.length ; i++)
{
    tab_speed_max.push(max_speed_vehicle_month[i].max);
    tab_speed_dates.push(max_speed_vehicle_month[i].date);
}

tab_speed_max = tab_speed_max.reverse();
tab_speed_dates = tab_speed_dates.reverse();


var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: tab_speed_dates,
        datasets: [{
            label: 'speed',
            data: tab_speed_max,
            borderColor: "#a785d8",
            backgroundColor:"transparent",

        }



        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});





var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: tab_distance_dates,
        datasets: [{
            label: 'Distance',
            data: tab_distance_avg,
            borderColor: "#a785d8",
            backgroundColor:"transparent",

        }



        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: tab_distance_dates,
        datasets: [
            {
                label: 'Steps',
                data: tab_steps_avg,
                borderColor: "#c8c8c8",
                backgroundColor:"transparent",

            }

        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var ctx = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: tab_distance_dates,
        datasets: [{
            label: 'Weight',
            data: tab_weight_avg,
            borderColor: "#a785d8",

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
