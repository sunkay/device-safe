Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('devicesList', {path: '/'});
});