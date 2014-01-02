Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('devices'); }
});

Router.map(function(){
	this.route('devicesList', {path: '/'});

	this.route('deviceDetails', {
		path: '/devices/:_id',
		data: function(){ return Devices.findOne(this.params._id); }
	});
});

