//local client only collection
Breadcrumbs = new Meteor.Collection(null);

// data structure for representing Breadcrumbs
// route name, crumbs="devices|New Device|Details|etc"

insertCrumb = function(routeName, displayName, crumbs){
	Breadcrumbs.insert({route:routeName, display:displayName, crumbs:crumbs});
}

removeCrumb = function(routeName){
	Breadcrumbs.remove({route:routeName});
}

// populate the local collection on startup or when DOM ready
Meteor.startup(function(){
	if(Breadcrumbs.find().count() === 0){
		insertCrumb("devicesList", "Home", ['devicesList']);
		insertCrumb("deviceDetails","Home", ['devicesList']);
		insertCrumb("deviceNew","New", ['devicesList']);
		insertCrumb("deviceEdit","Home", ['devicesList']);		
	}
});

Template.breadcrumbs.helpers({
	crumb: function (routeName) {
		// return crumb that matches the current route 
		var currentRoute = Router.current();

		if(!currentRoute) 
			return '';
		else{
			var routeName = currentRoute.route.name;
			return Breadcrumbs.find({route: routeName});
		}
	}
});

