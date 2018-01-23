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
  tab_steps_avg.push(avg_steps_month[i].avg);
  tab_steps_dates.push(avg_steps_month[i].date);
}

tab_steps_avg = tab_steps_avg.reverse();
tab_steps_dates = tab_steps_dates.reverse();