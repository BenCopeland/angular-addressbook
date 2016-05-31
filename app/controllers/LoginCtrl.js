"use strict";

app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory){
	let ref = new Firebase(firebaseURL);
	// console.log(ref);
	// $scope.hasUser = false;

	$scope.account = {
		email: "",
		password: ""
	};

	// if im in logout, log me out
	if($location.path() === "/logout"){
		ref.unauth();
	}

				// = function(){} same as = () => {}  es6
	$scope.register = () => {
		console.log("you clicked register");
		ref.createUser({
			email: $scope.account.email,
			password: $scope.account.password
		}, (error, userData) => {
			if (error){
				console.log(`error creating user: ${error}`);
			}else{
				console.log(`created user account with uid: ${userData.uid}`);
				$scope.login();
			}
		});
	};

	$scope.login = () => {
		console.log("you clicked login");
		AuthFactory
			.authenticate($scope.account)
			.then(() => {
				// $scope.hasUser = true;
				$location.path("/");
				// wierd angular method? magic fix
				$scope.$apply();
			});
	};
});