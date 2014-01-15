Meteor.publish('devices', function(){
	return Devices.find();
});

Meteor.publish('checkouts', function(){
	return Checkouts.find();
});
