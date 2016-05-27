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

	// var postNewItem = function(newItem){
 //        return $q(function(resolve, reject) {
 //            $http.post(
 //                firebaseURL + "items.json",
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

	// var getSingleItem = function(itemId){
	// 	return $q(function(resolve, reject){
	// 		$http.get(firebaseURL + "items/" + itemId + ".json")
	// 		.success(function(itemObject){
	// 			resolve(itemObject);
	// 		})
	// 		.error(function(error){
	// 			reject(error);
	// 		});
	// 	});
	// };

	// var updateItem = function(itemId, newItem){
 //        return $q(function(resolve, reject) {
 //            $http.put(
 //                firebaseURL + "items/" + itemId + ".json",
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

	return {getContactList:getContactList, deleteContact:deleteContact};

});