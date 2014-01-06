Template.deviceNew.events({
	// add a new device
	'submit form': function(e){
		e.preventDefault();

		var device = {
			name: $(e.target).find('[name=name]').val(),
			os: $(e.target).find('[name=os]').val(),
			owner: $(e.target).find('[name=owner]').val()
		}

		Logger.info("In deviceNew event: ",device,"deviceNew");

		//device._id = Devices.insert(device);

		Meteor.call('insertDevice', device, function(error, id){
			if(error)
				throwError(error.reason);
			
			Router.go('devicesList');
		});
	}
});