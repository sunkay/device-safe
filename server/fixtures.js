if(Devices.find().count() === 0){

	// create a user called test
	var testId = Meteor.users.insert({
		profile: {name: 'Test User1'}
	});
	var testUser = Meteor.users.findOne(testId);
	var now = new Date().getTime();

	var deviceId1 = Devices.insert({
		name: 'iphone-4',
		owner: 'QA',
		os: 'iOS7',
		submitted: now,
		createdBy: testUser._id,
		createdByName: testUser.profile.name
	});
	Devices.insert({
		name: 'Samsung Galaxy S4',
		owner: 'QA',
		os: 'Android 4.3.3',
		submitted: now,
		createdBy: testUser._id,
		createdByName: testUser.profile.name
	});
	Devices.insert({
		name: 'iphone-5s',
		owner: 'Dev',
		os: 'iOS6',
		submitted: now,
		createdBy: testUser._id,
		createdByName: testUser.profile.name
	});

	Checkouts.insert({
		deviceId: deviceId1,
		userId: testUser._id,
		userName: testUser.profile.name,
		submitted: now,
		comments:'checked out for dev testing' 
	});
}