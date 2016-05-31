app.controller("ContactNewCtrl", function($scope, $location, contactStorage){
	$scope.title = "New Contact";
    $scope.submitButtonText = "Add New Contact";
    $scope.newTask = {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        company: "",
        shitListed: false,
        notes: "",
        uid: ""
    };
      
    $scope.addNewContact = function(){
        contactStorage.postNewContact($scope.newTask)
            .then(function successCallback(response) {
                console.log(response);
                $location.url("/contacts/list");
            });
    };
});