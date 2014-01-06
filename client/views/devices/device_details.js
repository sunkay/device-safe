Template.deviceDetails.events({
	// Delete Device 
	'click .delete': function(e){
		e.preventDefault();

		Logger.verbose("In delete event handler");

		if(confirm("Do you really want to delete this device?")){
			var currentDeviceId = this._id;
			Devices.remove(currentDeviceId);
			Router.go('devicesList');
		}
	}
});