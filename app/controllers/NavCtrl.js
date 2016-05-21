app.controller("NavCtrl", function($scope){
	$scope.navItems = [
	{
		name: "All Contacts",
		url: "#/contacts/list"
	},
	{
		name:"New Contact",
		url: "#/contacts/new"
	}];
});