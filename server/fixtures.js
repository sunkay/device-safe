if(Devices.find().count() === 0){
	Devices.insert({
		name: 'iphone-4',
		owner: 'QA',
		os: 'iOS7'
	});
	Devices.insert({
		name: 'Samsung Galaxy S4',
		owner: 'QA',
		os: 'Android 4.3.3'
	});
	Devices.insert({
		name: 'iphone-5s',
		owner: 'Dev',
		os: 'iOS6'
	});
}