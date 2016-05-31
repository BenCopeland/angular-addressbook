var app = angular.module("AddressApp", ["ngRoute"])
	.constant("firebaseURL", "https://angular-addressbook.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		console.log("user is authenticated, resolve route promise");
		resolve();
	}else{
		console.log("user is NOT authenticated, reject route promise");
		reject();
	}
});

//vvv angular method run once
app.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "partials/contact-list.html",
			controller: "ContactListCtrl",
			resolve: {isAuth}
		}).
		when("/contacts/list", {
			templateUrl: "partials/contact-list.html",
			controller: "ContactListCtrl",
			resolve: {isAuth}
		}).
		when("/contacts/new", {
			templateUrl: "partials/contact-new.html",
			controller: "ContactNewCtrl",
			resolve: {isAuth}
		}).
		when("/contacts/:contactId", {
			templateUrl: "partials/contact-details.html",
			controller: "ContactDetailsCtrl",
			resolve: {isAuth}
		}).
		when("/contacts/:contactId/edit", {
			templateUrl: "partials/contact-new.html",
			controller: "ContactEditCtrl",
			resolve: {isAuth}
		}).
		when("/login", {
			templateUrl: "partials/login.html",
			controller: "LoginCtrl"
		}).
		when("/logout", {
			templateUrl: "partials/login.html",
			controller: "LoginCtrl"
		}).
		otherwise("/");
});

app.run(($location) => {
	let contactsRef = new Firebase("https://angular-addressbook.firebaseio.com/");

	contactsRef.onAuth(authData => {
		if(!authData){
			$location.path("/login");
		}
	});
});