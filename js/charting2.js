//google.load("visualization", "1", {packages:["corechart"]});
var debitCredit;
$(document).ready(function() {

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#FBB369", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#002A3A'],
            [1, '#002A3A']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$('#fails').highcharts({
	chart: {
		type: 'column'
	},
	title: {
		text: 'Fails'
	},
	xAxis: {
		categories: ['REC', 'DEL']
	},
	yAxis: {
		labels: {
			formatter: function() {
				return this.value / 1000000000 +'B';
			}
		}
	},
	credits: {
		enabled: false
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		name: 'Quantity',
		data: [-645186129.3, 1587743708]
	}, {
		name: 'Amount',
		data: [-573881950.9, 2797720962]
	}]
});

$('#deficit').highcharts({
	colors: ['#FBB369', '#7798BF'],
	chart: {
		type: 'column'
	},
	title: {
		text: 'Deficit over 5 Days'
	},
	xAxis: {
		categories: ['5-10 days', '11-15 days', '16-30 days', '31+ days']
	},
	yAxis: {
		title: {
			text: 'Cusips'
		},
		labels: {
			formatter: function() {
				return this.value / 1000 +'K';
			}
		}
	},
	credits: {
		enabled: false
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		name: 'Cusips',
		data: [30, 60, 120, 3000
		]
	}]
});
//debit credit interest 
$('#debitCredit').highcharts({
	colors: ['#FBB369', '#7798BF'],
	chart: {
		type: 'column'
	},
	title: {
		text: 'Debit Credit Interest'
	},
	xAxis: {
		categories: ['Credit Interest', 'Margin']
                //categories: []
	},
	yAxis: {
		title: {
			text: 'Amount'
		},
		labels: {
			formatter: function() {
				return this.value / 1000000000 +'B';
			}
		}
	},
	credits: {
		enabled: false
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		name: 'Amount',
		//data: [-2100000000.25, 2400000000.35]
                data: [0,0]
	}]
});

$('#marginCall').highcharts({
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false
	},
	title: {
		text: 'Margin Call Summary'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true
		}
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		type: 'pie',
		name: 'Amount',
		data: [
			['Equity', 46687899],
			['Maintenance', 248048575],
			['Initial', 45975693],
			['House', 1572365],
			['Day', 206813]
		]
	}]
});

$('#commissions').highcharts({
	chart: {
		type: 'area'
	},
	title: {
		text: 'Commissions'
	},
	xAxis: {
		allowDecimals: false,
		labels: {
			formatter: function() {
				return this.value;
			}
		},
		categories: [
			'Jan.',
			'Feb.',
			'Mar.',
			'Apr.',
			'May',
			'June',
			'July',
			'Aug.',
			'Sept.',
			'Oct.' ,
			'Nov.',
			'Dec.'
		]
	},
	yAxis: {
		title: {
			text: 'Amount'
		},
		labels: {
			formatter: function() {
				return this.value / 1000000 +'M';
			}
		}
	},
	tooltip: {
		shared: true,
		valuePrefix: '$'
	},
	plotOptions: {
		area: {
			fillOpacity: 0.5
		}
	},
	lang: {
		buttonTitle: 'Data Table'
	},
	exporting: { 
		buttons: {
			contextButton: {
				_titleKey: 'buttonTitle',
				onclick: function () {
					window.location.href = 'table.html'
					//alert('Go to table view!');
				}
            }
		}
	},
	series: [{
		name: '2012',
		data: [2200000, 2000000, 2300000, 2200000,
			   2100000, 1900000, 2000000, 1900000,
			   1800000, 1500000, 1700000, 1400000]
	}, {
		name: '2013',
		data: [1400000, 1200000, 1100000, 1000000,
			   1600000, 1400000, 1400000, 900000,
			   1400000, 1100000, 1300000, 1200000]
	}]
});

$('#acats-reps').highcharts({
	chart: {
		type: 'bar'
	},
	title: {
		text: 'ACATS-REPS'
	},
	legend: {
		enabled: false
	},

	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true,
			}
		}
	},
	xAxis: {
		type: 'category'
	},
	tooltip: {
		enabled: false	
	},
	exporting: { 
		enabled: false
	},
	series: [{
		name: 'Totals',
		data: [{
			name: 'ACATS IN',
			y: 1475978,
			drilldown: 'in'
		},  {
			name: 'ACATS OUT',
			y: 743954,
			drilldown: 'out'
		}]
	}],
	drilldown: {
		series: [{
			name: 'ACATS IN',
			id: 'in',
			data: [
				['Accounts', 325],
				['Reps', 7]
			]
		},	{
			name: 'ACATS OUT',
			id: 'out',
			data: [
				['Accounts', 178],
				['Reps', 3]
			]
		}]
	}
});

//This is going to be a bunch of faking incoming data !!!!HORRIBLE names (dCC)!!!!
//var deficitChart = $('#deficit').highcharts(), dCx = $('#deficit').highcharts().series[0].data[1].x;

//var marginCallChart = $('#marginCall').highcharts(), mCCx = $('#marginCall').highcharts().series[0].data[4].x;

//var debitCreditChart = $('#debitCredit').highcharts(), dCC = $('#debitCredit').highcharts().series[0].data[1].y;
//var debitCreditChart2 = $('#debitCredit').highcharts(), dCC2 = $('#debitCredit').highcharts().series[0].data[0].y;

//window.setInterval(function() {
//	marginCallChart.series[0].data[4].update(mCCx += 1000000)
//}, 1000);

// window.setInterval(function() {
// 	deficitChart.series[0].data[1].update(dCx = (20 + Math.floor(Math.random() * 5000)))
// }, 10000);
/*
window.setInterval(function() {
	debitCreditChart.series[0].data[1].update(dCC += (10000000 + Math.floor(Math.random() * -20000000)))
	debitCreditChart2.series[0].data[0].update(dCC2 += (200000000 + Math.floor(Math.random() * -400000000)))
}, 5000);
*/


var storage = window.localStorage;
console.log(storage);

if (storage.text) {
    document.getElementById('input').value = storage.text;
}

$("#button1").click(function save() {
	storage.text = document.getElementById('input').value;
	alert(storage.text);
});

console.log("I made it here 99");
setInterval(function() { getData(); }, 30000);

function getData(){
             console.log("retrieving data from server ");
             var debitCreditChart3 = $('#debitCredit').highcharts();
             var url = "http://localhost/risk/cssRiskDREST.svc/interestsummary";
             var arr =[];
             $.getJSON (url, function (interestData) {
                                var data = interestData;
                                for (var key in data) {
                                     console.log(data[key].InterestAmount);
                                     var amount = data[key].InterestAmount;
                                     arr.push(amount); 
                                 }  
                                 // update the series data
                 
                 debitCreditChart3.series[0].setData(arr);
                 
                 
             });
         }
         
});