Meteor.publish('devices', function(){
	return Devices.find();
});