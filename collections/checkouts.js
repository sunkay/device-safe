Checkouts = new Meteor.Collection('checkouts');


Meteor.methods({
	checkout: function (checkoutAttributes) {
		var user = Meteor.user();

		// check if user is logged in 
		if(!user){
			throw new Meteor.Error(401, 'checkout: please login...');
		}

		// mark the device as checked out
		Devices.update(checkoutAttributes.deviceId, {$set: {checkedout: 1}});

		// insert the checkout record with the device id
		var checkoutRecord = {
			deviceId: checkoutAttributes.deviceId,
			userId: user._id,
			userName: user.username, 
			submitted: new Date().getTime(), 
			comments: checkoutAttributes.comments
		};

		Logger.info("inserting checkout record: ", checkoutRecord, "Method checkout");

		return Checkouts.insert(checkoutRecord);

	},

	checkin: function(deviceId){
		var user = Meteor.user();

		// check if user is logged in 
		if(!user){
			throw new Meteor.Error(401, 'checkin: please login...');
		}

		Logger.info("updating checkin record: ", deviceId, "Method checkin");


		// mark the device as checked out
		Devices.update(deviceId, {$set: {checkedout: 0}});
	}
});