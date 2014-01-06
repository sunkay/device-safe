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

	this.route('deviceNew', {
		path: '/newDevice'
	});

	this.route('deviceEdit', {
		path: "/devices/:_id/edit",
		data: function(){ return Devices.findOne(this.params._id); }
	});
});

Router.before(function() { clearErrors() });
