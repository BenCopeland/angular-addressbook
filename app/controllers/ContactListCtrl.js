app.controller("ContactListCtrl", function($scope, contactStorage){
	$scope.contacts = [];

	contactStorage.getContactList().then(function(contactCollection){
		console.log(contactCollection);  
		$scope.contacts = contactCollection;
	});

	$scope.contactDelete = function(contactId){
        console.log("contactId", contactId);
        contactStorage.deleteContact(contactId).then(function(response){
            contactStorage.getContactList().then(function(contactCollection){
                $scope.contacts = contactCollection;
            });
        });
    };

    $scope.inputChange = function(contact){
        contactStorage.updateShitlistStatus(contact)
            .then(function(response){
                // console.log(response);
        })
    }

});