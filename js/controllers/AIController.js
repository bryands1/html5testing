'use strict';

aiApp.controller('AIController',
  function AIController($scope) {
    $scope.agreements = [
        {
          accountHolder: 'Clayton',
          accountNumber: '554202472ist1',
          agreement: 'Awesome Agreement',
          formNumber: '1',
          dateDue: '4/4/14',
          dateExpires: '4/5/16',
          production: '',
          imaged: 'Yes',
          imagingStatus: 'Complete',
          mediaLocation: '',
          mediaSublocation: ''
        }
    ]
});