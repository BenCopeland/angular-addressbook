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
		when("/contacts/:contactId", {
			templateUrl: "partials/contact-details.html",
			controller: "ContactViewCtrl"
		}).
		when("/contacts/:contactId/edit", {
			templateUrl: "partials/contact-new.html",
			controller: "ContactEditCtrl"
		}).
		otherwise("/contacts/list");
});