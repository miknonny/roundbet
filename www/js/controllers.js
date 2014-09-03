'use strict';

angular.module('roundbet.controllers', [])

	// This controls the Welcome page.
	.controller('WelcomeCtrl', ['$scope', function ($scope) {

		// Function to Submit form after all validation.
		$scope.submitForm = function (isValid) {
			if (isValid) {
				alert('It worked!');
			}
		};
		
	}])

	// this Controls the  Login page.
	.controller('LoginCtrl', ['$scope', function(){
		
	}])

	// This controlls the Signup page
	.controller('SignupCtrl', ['$scope', function(){
		
	}]);

