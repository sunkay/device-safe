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

var requireLogin = function() {
	if(!Meteor.user()) {
		if(Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		
		this.stop();
	}
}

Router.before(requireLogin, {only: ['deviceNew', 'deviceEdit']})
Router.before(function() { clearErrors() });