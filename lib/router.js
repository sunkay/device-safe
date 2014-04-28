Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
			return [Meteor.subscribe('devices'),
					Meteor.subscribe('checkouts')];
		}
});

Router.map(function(){
	this.route('devicesList', {
		path: '/'
	});

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

	/*
	this.route('deviceCheckout', {
		path: "/devices/:_id/checkout",
		data: function(){ return Devices.findOne(this.params._id); }
	});
	*/
});

var requireLogin = function() {
	if(!Meteor.user()) {
		if(Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		
		pause();
	}
}

Router.onBeforeAction(requireLogin, {only: ['deviceNew', 'deviceEdit']})
Router.onBeforeAction(function() { clearErrors() });
