app.controller("ContactListCtrl", function($scope){
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
});