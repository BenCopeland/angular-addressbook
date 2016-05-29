app.factory("contactStorage", function($q, $http, firebaseURL){
	var getContactList = function(){
		var contacts = [];
		return $q(function(resolve, reject){
			$http.get(firebaseURL + "contacts.json")
			.success(function(contactObject){
				var contactCollection = contactObject;
				Object.keys(contactCollection).forEach(function(key){
					contactCollection[key].id = key;
					contacts.push(contactCollection[key]);
				});
				resolve(contacts);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	var deleteContact = function(contactId){
		return $q(function(resolve, reject){
			$http
            	.delete(firebaseURL + "contacts/" + contactId + ".json")
            	.success(function(objectFromFirebase){
            		resolve(objectFromFirebase);
            	});
		});
	};

	var postNewContact = function(newContact){
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "contacts.json",
                JSON.stringify({
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    phone: newContact.phone,
                    address: newContact.address,
                    email: newContact.address,
                    company: newContact.company,
                    shitListed: newContact.shitListed,
                    notes: newContact.notes
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
	};

	var getSingleContact = function(contactId){
		return $q(function(resolve, reject){
			$http.get(firebaseURL + "contacts/" + contactId + ".json")
			.success(function(contactObject){
				resolve(contactObject);
			})
			.error(function(error){
				reject(error);
			});
		});
	};

	var updateContact = function(contactId, newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "contacts/" + contactId + ".json",
                JSON.stringify({
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    phone: newContact.phone,
                    address: newContact.address,
                    email: newContact.address,
                    company: newContact.company,
                    shitListed: newContact.shitListed,
                    notes: newContact.notes
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
	};

	// var updateCompletedStatus = function(newItem){
 //        return $q(function(resolve, reject) {
 //            $http.put(
 //                firebaseURL + "items/" + newItem.id + ".json",
 //                JSON.stringify({
 //                    assignedTo: newItem.assignedTo,
 //                    dependencies: newItem.dependencies,
 //                    dueDate: newItem.dueDate,
 //                    isCompleted: newItem.isCompleted,
 //                    location: newItem.location,
 //                    task: newItem.task,
 //                    urgency: newItem.urgency
 //                })
 //            )
 //            .success(
 //                function(objectFromFirebase) {
 //                    resolve(objectFromFirebase);
 //                }
 //            );
 //        });
	// };

	return {getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact, getSingleContact:getSingleContact, updateContact:updateContact};

});