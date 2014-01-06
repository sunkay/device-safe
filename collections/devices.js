Devices = new Meteor.Collection('devices');

Devices.allow({
	update: function(userId, doc){
		return true;
	},
	remove: function(userId, doc){
		return true;
	}
});

// meteor methods run on the server side and are more secure
// Any common stuff like timestamping & server side validations
// are better done here
Meteor.methods({
	insertDevice: function(deviceAttributes){
		// validate required attributes, name, OS
		if(!deviceAttributes.name || !deviceAttributes.os)
			throw new Meteor.Error(422, "Please fill in Name & OS..");

		// pick out whitelisted keys to make sure no injection happens
		var device = _.extend(_.pick(deviceAttributes, 'name', 'os', 'owner'),{
			submitted: new Date().getTime()
		});

		Logger.info("Server insert device",device,"insertDevice");

		var deviceId = Devices.insert(device);

		return deviceId;
	},

	updateDevice: function(deviceAttributes){

	}


});