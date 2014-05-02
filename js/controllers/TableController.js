'use strict';

dashboardApp.controller('TableController',
  function TableController($scope) {
      
    $scope.commissionHeaders = {
        categories: [
            'Year',
			'Jan.',
			'Feb.',
			'Mar.',
			'Apr.',
			'May',
			'June',
			'July',
			'Aug.',
			'Sept.',
			'Oct.',
			'Nov.',
			'Dec.'
		]
    };
    
    $scope.commissions = [
        {
            year: '2012',
            data: [
                2200000, 
                2000000, 
                2300000, 
                2200000,
                2100000, 
                1900000, 
                2000000, 
                1900000,
                1800000, 
                1500000, 
                1700000, 
                1400000
            ]
        },
		{
			year: '2013',
			data: [
				1400000, 
				1200000, 
				1100000, 
				1000000,
			    1600000, 
			    1400000, 
			    1400000, 
			    900000,
			    1400000, 
			    1100000, 
			    1300000, 
			    1200000
			]
		}
    ];
});