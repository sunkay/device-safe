Devices = new Meteor.Collection('devices');

ownsDevice = function(userId, doc) {
	Logger.info("Doc userId: "+userId, doc, "ownsDevice");
	if (!(doc && doc.createdBy === userId))
	{
		throw new Meteor.Error(401, 'Access denied.... not an owner');
	}
	return true;
}

Devices.allow({
	update: ownsDevice,
	remove: ownsDevice
});


// meteor methods run on the server side and are more secure
// Any common stuff like timestamping & server side validations
// are better done here
Meteor.methods({
	insertDevice: function(deviceAttributes){

		var user = Meteor.user();

		// check for logged_in user
		if(!user){
			throw new Meteor.Error(401, 'insertDevice: Access denied');
		}

		// validate required attributes, name, OS
		if(!deviceAttributes.name || !deviceAttributes.os)
			throw new Meteor.Error(422, "Please fill in Name & Operating system..");

		// pick out whitelisted keys to make sure no injection happens
		var device = _.extend(_.pick(deviceAttributes, 'name', 'os', 'owner'),{
			submitted: new Date().getTime(),
			createdBy: user._id,
			createdByName: user.username
		});

		Logger.info("Server insert device",device,"insertDevice");

		var deviceId = Devices.insert(device);

		return deviceId;
	}
});