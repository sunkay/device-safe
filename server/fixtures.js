if(Devices.find().count() === 0){
	Devices.insert({
		name: 'iphone-4',
		owner: 'sunny',
		os: 'iOS7'
	});
	Devices.insert({
		name: 'Samsung Galaxy S4',
		owner: 'sun',
		os: '4.3.3'
	});
	Devices.insert({
		name: 'iphone-5s',
		owner: 'suy',
		os: 'iOS6'
	});
}