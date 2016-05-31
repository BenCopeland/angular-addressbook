app.factory("contactStorage", function($q, $http, firebaseURL, AuthFactory){
	var getContactList = function(){
        var contacts = [];
        let user = AuthFactory.getUser();
        return $q(function(resolve, reject){
            $http.get(`${firebaseURL}contacts.json?orderBy="uid"&equalTo="${user.uid}"`)
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
        let user = AuthFactory.getUser();
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
                    notes: newContact.notes,
                    uid: user.uid
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
        let user = AuthFactory.getUser();
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
                    notes: newContact.notes,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
	};

	var updateShitlistStatus = function(newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "contacts/" + newContact.id + ".json",
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

	return {getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact, getSingleContact:getSingleContact, updateContact:updateContact, updateShitlistStatus:updateShitlistStatus};

});