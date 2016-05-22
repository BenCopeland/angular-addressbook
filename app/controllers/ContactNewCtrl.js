app.controller("ContactNewCtrl", function($scope){
	$scope.newTask = {};
	$scope.contacts = [
		{
			id: 0,
			firstName: "Scot",
			lastName: "Copeland",
			phone: "(615)830-2937",
			email: "scopeland@nashvillechildrenstheatre.org",
			company: "Nashville Children's Theatre"
		},
		{
			id: 1,
			firstName: "Rene",
			lastName: "Copeland",
			phone: "(615)830-2936",
			email: "Rene@nashvillerep.org",
			company: "Nashville Repertory Theatre"
		},
		{
			id: 2,
			firstName: "Josh",
			lastName: "Danger",
			phone: "(615)830-2938",
			email: "JoshDanger@gmail.com",
			company: "No Kings"
		},
	];

	$scope.addNewContact = function(){
		$scope.newTask.id = $scope.contacts.length;
		console.log("new contact: ", $scope.newTask);
		$scope.contacts.push($scope.newTask);
		$scope.newTask = "";
		console.log($scope.contacts);
	};

});