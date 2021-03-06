var current_weight = 83.658;

var max_weight_month = 
[
  {
    "date": "2017-12-01T00:00:00Z",
    "max": 84.507
  },
  {
    "date": "2017-11-01T00:00:00Z",
    "max": 85.724
  },
  {
    "date": "2017-10-01T00:00:00Z",
    "max": 85.123
  },
  {
    "date": "2017-09-01T00:00:00Z",
    "max": 87.364
  },
  {
    "date": "2017-08-01T00:00:00Z",
    "max": 84.324
  },
  {
    "date": "2017-07-01T00:00:00Z",
    "max": 80.875
  },
  {
    "date": "2017-06-01T00:00:00Z",
    "max": 84.507
  },
  {
    "date": "2017-05-01T00:00:00Z",
    "max": 85.724
  },
  {
    "date": "2017-04-01T00:00:00Z",
    "max": 82.659
  },
  {
    "date": "2017-03-01T00:00:00Z",
    "max": 80.983
  },
  {
    "date": "2017-02-01T00:00:00Z",
    "max": 81.362
  },
  {
    "date": "2017-01-01T00:00:00Z",
    "max": 80.850
  }
];

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


var max_weight_year_2017 = 
[
  {
    "date": "2017-09-01T00:00:00Z",
    "max": 87.664
  }
];