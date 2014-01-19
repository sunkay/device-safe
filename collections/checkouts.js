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
			checkoutDate: new Date().getTime(), 
			checkinDate: 0,
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

		Logger.info("updating checkin record: deviceId", deviceId, "Method checkin");

		// update checkin date on the checkout record
		var checkout = Checkouts.findOne({deviceId:deviceId, checkinDate: 0});
		Logger.info("checkoutId", checkout._id, "Method Checkin");

		ownsDocument(user._id, checkout);

		var date = new Date().getTime();
		Checkouts.update(checkout._id, {$set: {checkinDate: date}});

		// mark the device as checked out
		Devices.update(deviceId, {$set: {checkedout: 0}});
	}
});