var app = angular.module("AddressApp", ["ngRoute"])
	.constant("firebaseURL", "https://angular-addressbook.firebaseio.com/");

//vvv angular method run once
app.config(function($routeProvider){
	$routeProvider.
		when("/contacts/list", {
			templateUrl: "partials/contact-list.html",
			controller: "ContactListCtrl"
		}).
		when("/contacts/new", {
			templateUrl: "partials/contact-new.html",
			controller: "ContactNewCtrl"
		}).
		// when("/contacts/new", {
		// 	templateUrl: "partials/contact-new.html",
		// 	controller: "ContactNewCtrl"
		// }).
		otherwise("/contacts/list");
});