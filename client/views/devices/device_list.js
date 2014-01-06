Template.devicesList.helpers({
	devices: function(){
		Logger.verbose("returning device list", "deviceList");
		return Devices.find();
	}
});