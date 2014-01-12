Template.deviceEdit.events({
	// add a new device
	'submit form': function(e){
		e.preventDefault();

		var deviceID = this._id;

		var device = {
			name: $(e.target).find('[name=name]').val(),
			os: $(e.target).find('[name=os]').val(),
			owner: $(e.target).find('[name=owner]').val(),
			modifiedById: Meteor.user()._id,
			modifiedBy: Meteor.user().username
		}

		Logger.info("Edit Device", device, "deviceEdit");

		Devices.update(deviceID, {$set: device}, function(error){
			if(error){
				throwError(error.reason);
				// display error to the user
				Logger.trace(error, "Error in device update", "deviceEdit");
			} else {
				Router.go('devicesList');				
			}
		});
	}
});