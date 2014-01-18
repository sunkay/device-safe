if(Devices.find().count() === 0){

	// create a user called test
	var testId = Meteor.users.insert({
		profile: {name: 'Test User1'}
	});
	var testUser = Meteor.users.findOne(testId);
	var now = new Date();

	var deviceId1 = Devices.insert({
		name: 'iphone-4',
		owner: 'QA',
		os: 'iOS7',
		submitted: now.getTime(),
		checkedout: 1, // 0 = No, 1 = Yes
		createdBy: testUser._id,
		createdByName: testUser.profile.name
	});

	Checkouts.insert({
		deviceId: deviceId1,
		userId: testUser._id,
		userName: testUser.profile.name,
		checkoutDate: now.getTime(),
		checkinDate: 0,
		comments:'checked out for dev testing' 
	});
}