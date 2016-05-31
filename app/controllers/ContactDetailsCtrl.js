app.controller("ContactDetailsCtrl", function($scope, $routeParams, contactStorage){
    $scope.contacts = [];
    $scope.selectedContact = {};
    // console.log($routeParams.itemId);

    contactStorage.getContactList().then(function(contactCollection){
        // console.log("contactCollection from promise", contactCollection);
        $scope.contacts = contactCollection;

        $scope.selectedContact = $scope.contacts.filter(function(contact){
			return contact.id === $routeParams.contactId;
		})[0];
    });
});