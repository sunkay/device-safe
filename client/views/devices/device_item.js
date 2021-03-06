Template.deviceItem.events({
		// Delete Device 
	'click .delete': function(e){
		e.preventDefault();

		Logger.info("In delete event handler");

		if(!Meteor.user()){
			throwError("Access Denied... please login..");
			Router.go('devicesList');
			return;
		}

		var currentDeviceId = this._id;

		bootbox.confirm("Are you sure?", function(result) {
  			if(result){
				Devices.remove(currentDeviceId, function(error){
					if(error)
						throwError(error.reason);			
				});
				Router.go('devicesList');  				
  			}
		});
	},

	'click .checkout': function(e){
		e.preventDefault();

		var deviceId = this._id;

		if(!Meteor.user()){
			throwError("Access Denied... please login..");
			Router.go('devicesList');
			return;
		}

		bootbox.prompt("Checking out. Please give a reason: ", function(result) { 
			if (result === null) {                                             
				Logger.info("Cancelling checkout... by " + Meteor.user());                              
			} else {

				// insert the checkout record with the device id
				var checkoutRecord = {
					deviceId: deviceId,
					comments: result
				};

				Logger.info("inserting checkout record: ", checkoutRecord, "click checkout");


				//Checkouts.insert(checkoutRecord, function(error){
				Meteor.call('checkout', checkoutRecord, function (error, id){
					if(error){
						throwError(error.reason);
						Logger.trace(error, "Error checking out device", "click checkout");
					}
				});                     
			}
		});
	},

	'click .checkin': function(e){
		e.preventDefault();

		if(!Meteor.user()){
			throwError("Access Denied... please login..");
			Router.go('devicesList');
			return;
		}


		Logger.info("checking in: ", this._id, "click checkin");


		//Checkouts.insert(checkoutRecord, function(error){
		Meteor.call('checkin', this._id, function (error, id){
			if(error){
				throwError(error.reason);
				Logger.trace(error, "Error checking in the device", "click checkin");
			}
		});
	}
});
