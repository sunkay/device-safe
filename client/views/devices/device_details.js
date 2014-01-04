Template.deviceDetails.events({
	// Delete Device 
	'click .delete': function(e){
		e.preventDefault();

		console.log("In delete event handler");

		if(confirm("Delete this device?")){
			var currentDeviceId = this._id;
			Devices.remove(currentDeviceId);
			Router.go('devicesList');
		}
	}
});