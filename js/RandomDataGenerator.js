/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getDataInterestDemo(){
     console.log("retrieving interest data from server ");
             var debitCreditChart3 = $('#debitCredit').highcharts();
             
             var arr = [];
             arr.push(Math.random() * 10000000);
             arr.push(-1 * Math.random() * 20000000);
            
             debitCreditChart3.series[0].setData(arr); 
}
function getDeficitSummaryDataDemo(){
     console.log("retrieving deficit summary data from server Demo ");
             var DeficitChart3 = $('#deficit').highcharts();
             var arr =[];
             arr.push(Math.random() * 200);
             arr.push(Math.random() * 100);
             arr.push(Math.random() * 100);
             arr.push(Math.random() * 75);
             var arr2 = [];
             DeficitChart3.series[0].setData(arr2);
            DeficitChart3.series[0].setData(arr);
}
function getFailsSummaryDataDemo(){
     console.log("retrieving deficit summary data from server Demo");
            var FailsChart3 = $('#fails').highcharts();
            var arrAmt =[];
            var arrQty =[];
            arrQty.push(-1 * Math.random() * 648354598); 
            arrAmt.push(-1 * Math.random() * 576737980.85);
            arrQty.push(Math.random() * 1604129027.328); 
            arrAmt.push(Math.random() * 2811426456.63);
            // update the series data
            FailsChart3.series[0].setData(arrQty);
            FailsChart3.series[1].setData(arrAmt);
             
}
function getMarginCallsSummaryDataDemo(){
            console.log("retrieving Margin Call summary data from server Demo");
            var MarginCallsChart3 = $('#marginCall').highcharts();
            var callSummary =[];
            
            var type1 = "House";
            var amt = Math.random()* 1000000;
            var temparray = [];
            temparray.push(type1);
            temparray.push(amt);
            callSummary.push(temparray);
            
            var type2 = "Intial";
            var amt2 = Math.random()* 1000000;
            var temparray2 = [];
            temparray2.push(type2);
            temparray2.push(amt2);
            callSummary.push(temparray2);
            
            var type3 = "Maintenance";
            var amt3 = Math.random()* 1000000;
            var temparray3 = [];
            temparray3.push(type3);
            temparray3.push(amt3);
            callSummary.push(temparray3);
            
            var type4 = "Equity";
            var amt4 = Math.random()* 1000000;
            var temparray4 = [];
            temparray4.push(type4);
            temparray4.push(amt4);
            callSummary.push(temparray4);
            
            var type5 = "Day";
            var amt5 = Math.random()* 1000000;
            var temparray5 = [];
            temparray5.push(type5);
            temparray5.push(amt5);
            callSummary.push(temparray5);
            
            // update the series data
            MarginCallsChart3.series[0].setData(callSummary);
            
}