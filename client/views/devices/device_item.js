Template.deviceItem.events({
		// Delete Device 
	'click .delete': function(e){
		e.preventDefault();

		Logger.verbose("In delete event handler");

		if(!Meteor.user()){
			throwError("Access Denied... please login..");
			Router.go('devicesList');
			return;
		}

		if(confirm("Do you really want to delete this device?")){
			var currentDeviceId = this._id;
			Devices.remove(currentDeviceId, function(error){
				throwError(error.reason);			
			});
			Router.go('devicesList');
		}
	}
});