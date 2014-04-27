Template.devicesList.helpers({
	devices: function(){
		Logger.info("returning device list", "deviceList");
		return Devices.find({}, {sort: {submitted: -1}});
	}
});