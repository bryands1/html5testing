//google.load("visualization", "1", {packages:["corechart"]});

$(document).ready(function() {
toggleFullScreen();
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
		data: [0, 0]
	}, {
		name: 'Amount',
		data: [0, 0]
	}]
});

$('#Inv-summary').highcharts({
	chart: {
        
        type: 'column',
	},
	title: {
		text: 'Inventory Market Value Summary'
	},
    plotOptions: {
        column: {
            
            borderWidth: 1
            
        }
    },
	xAxis: {
		categories: ['Market Value','Market Value Short']
	},
	yAxis: { title: {
			text: 'Market Value'
		}
	},
	credits: {
		enabled: false
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		name: 'AssetBackedBond',
		data: [1.900000, -1.900000]
	}, {
		name: 'CorporateBond',
		data: [100000, -100000]
	},
        {
		name: 'GovernmentBond',
		data: [1000000, -1000000]
	}, 
                 {
		name: 'LimitedPartnership',
		data: [1300000, -1300000]
	}, 
                 {
		name: 'MoneyMarketBond',
		data: [1600000, -750000]
	}, 
                 {
		name: 'MunicipalBond',
		data: [1100000, -750000]
	}, 
                 {
		name: 'MutualFund',
		data: [900000, -900000]
	}, 
                 {
		name: 'Option',
		data: [93000, -93000]
	}, 
                 {
		name: 'other',
		data: [1100000, -1100000]
	}, 
                 {
		name: 'OtherBond',
		data: [100000, -750000]
	}, 
                 {
		name: 'PreferredStock',
		data: [10000, -10000]
	}, 
                 {
		name: 'RatedStock',
		data: [1100000, -750000]
	}, 
                 {
		name: 'Stock',
		data: [1100000, -750000]
	}, 
                 {
		name: 'UnitInvestmentTrust',
		data: [1000000, -75000]
	}
    
            ]
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
		}/*,
		labels: {
			formatter: function() {
				return this.value / 1000 +'K';
			}
		}*/
	},
	credits: {
		enabled: false
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		name: 'Cusips',
		data: []
	}]
});

$('#debitCredit').highcharts({
	colors: ['#FBB369', '#7798BF'],
	chart: {
		type: 'column'
	},
	title: {
		text: 'Debit Credit Interest'
	},
	xAxis: {
		categories: [ 'Margin','Credit Interest']
	},
	yAxis: {
		title: {
			text: 'Amount'
		}/*,
		labels: {
			formatter: function() {
				return this.value / 1000000000 +'B';
			}
		}*/
	},
	credits: {
		enabled: false
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		name: 'Amount',
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
			allowPointSelect: true/*,
                        dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                    }}*/
		}
	},
	exporting: { 
		enabled: false 
	},
	series: [{
		type: 'pie',
		name: 'Amount',
		data: [	]
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
/*
var deficitChart = $('#deficit').highcharts(), dCx = $('#deficit').highcharts().series[0].data[1].x;

var marginCallChart = $('#marginCall').highcharts(), mCCx = $('#marginCall').highcharts().series[0].data[4].x;

var debitCreditChart = $('#debitCredit').highcharts(), dCC = $('#debitCredit').highcharts().series[0].data[1].y;
var debitCreditChart2 = $('#debitCredit').highcharts(), dCC2 = $('#debitCredit').highcharts().series[0].data[0].y;
*/
/*
window.setInterval(function() {
	marginCallChart.series[0].data[4].update(mCCx += 1000000)
}, 1000);

// window.setInterval(function() {
// 	deficitChart.series[0].data[1].update(dCx = (20 + Math.floor(Math.random() * 5000)))
// }, 10000);

window.setInterval(function() {
	debitCreditChart.series[0].data[1].update(dCC += (10000000 + Math.floor(Math.random() * -20000000)))
	debitCreditChart2.series[0].data[0].update(dCC2 += (200000000 + Math.floor(Math.random() * -400000000)))
}, 5000);
*/
var intervalDeficit = 10000;
var isDemo = 1; 
if (isDemo ===1)
{
    getDataInterestDemo();
    getDeficitSummaryDataDemo();
    getFailsSummaryDataDemo();
    getMarginCallsSummaryDataDemo();
    setInterval(function() { getDataInterestDemo(); }, 30000);
    setInterval(function() { getDeficitSummaryDataDemo(); }, 20000);
    setInterval(function() { getFailsSummaryDataDemo(); }, 35000);
    setInterval(function() { getMarginCallsSummaryDataDemo(); }, 25000);
}
else
{
    getDataInterest();
    getDeficitSummaryData();
    getFailsSummaryData();
    getMarginCallsSummaryData();
    setInterval(function() { getDataInterest(); }, 300000);
    setInterval(function() { getDeficitSummaryData(); }, intervalDeficit);
    setInterval(function() { getFailsSummaryData(); }, 200000);
    setInterval(function() { getMarginCallsSummaryData(); }, 600000);
}
});

function getMarginCallsSummaryData(){
             console.log("retrieving Margin Call summary data from server ");
             var MarginCallsChart3 = $('#marginCall').highcharts();
             var url = "http://bryansw1-7/RiskSite/cssRiskDREST.svc/MarginCallSummary";
             var callSummary =[];
             
             $.getJSON (url, function (MarginCallSumData) {
                                var data = MarginCallSumData;
                                for (var key in data) {
                                     console.log(data[key].Type);
                                     console.log(data[key].TotalDue);
                                     var type1 = data[key].Type;
                                     var amt = data[key].TotalDue;
                                     var temparray = [];
                                     temparray.push(type1);
                                     temparray.push(amt);
                                     callSummary.push(temparray); 
                                    
                                 }  
            
            // update the series data
            MarginCallsChart3.series[0].setData(callSummary);
            
            });
         }
function getFailsSummaryData(){
             console.log("retrieving deficit summary data from server ");
             var FailsChart3 = $('#fails').highcharts();
             var url = "http://bryansw1-7/RiskSite/cssRiskDREST.svc/failssummary";
             var arrAmt =[];
             var arrQty =[];
             $.getJSON (url, function (FailsSumData) {
                                var data = FailsSumData;
                                for (var key in data) {
                                     console.log(data[key].OpenAmount);
                                     console.log(data[key].OpenQuanity);
                                     var amt = data[key].OpenAmount;
                                     var qty = data[key].OpenQuanity;
                                     arrQty.push(qty); 
                                     arrAmt.push(amt);
                                 }  
            
            // update the series data
            FailsChart3.series[0].setData(arrQty);
            FailsChart3.series[1].setData(arrAmt);
            });
         }
function getDeficitSummaryData(){
             console.log("retrieving deficit summary data from server ");
             var DeficitChart3 = $('#deficit').highcharts();
             var url = "http://bryansw1-7/RiskSite/cssRiskDREST.svc/deficitsummary";
             var arr =[];
             var arr2 = [];
             var ii33 = 0;
             $.getJSON (url, function (DeficitSumData) {
                                var data = DeficitSumData;
                                for (var key in data) {
                                     console.log(data[key].CUSIPs);
                                     var qty = data[key].CUSIPs;
                                     arr.push(qty); 
                                     ii33++;
                                     if(ii33 === 3) break;
                                 }  
            //need to add over 30 days to service for now zero
            var qty = 75;
            arr.push(qty);
            // update the series data
            DeficitChart3.series[0].setData(arr2);
            DeficitChart3.series[0].setData(arr); 
            });
         }
function getDataInterest(){
             console.log("retrieving interest data from server ");
             var debitCreditChart3 = $('#debitCredit').highcharts();
             var url = "http://bryansw1-7/RiskSite/cssRiskDREST.svc/InterestSummary";
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
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement 
        && !document.webkitFullscreenElement 
        && !document.msFullscreenElement ) 
    {  // current working methods
        if (document.documentElement.requestFullscreen) 
        {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) 
        {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) 
        {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) 
        {
            document.documentElement.webkitRequestFullscreen();
        }   
    } else 
    {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}