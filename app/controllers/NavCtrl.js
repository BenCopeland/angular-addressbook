app.controller("NavCtrl", function($scope){
	$scope.navItems = [
	{
		name: "Shit-List",
		url: "#/contacts/list"
	},
	{
		name: "All Contacts",
		url: "#/contacts/list"
	},
	{
		name:"New Contact",
		url: "#/contacts/new"
	}];
});