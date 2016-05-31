app.controller("ContactEditCtrl", function($scope, $location, $routeParams, contactStorage){
    $scope.title = "Edit Contact";
    $scope.submitButtonText = "Update";
    $scope.newTask = {};

    contactStorage.getSingleContact($routeParams.contactId)
        .then(function successCallback(response){
            $scope.newTask = response;

        });
      
    $scope.addNewContact = function(){
        contactStorage.updateContact($routeParams.contactId, $scope.newTask)
            .then(function successCallback(response) {
                // console.log(response);
                $location.url("/contacts/list");
            });
    };
});