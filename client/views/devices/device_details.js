Template.deviceDetails.helpers({
	checkouts: function(){
		return Checkouts.find({deviceId: this._id});
	}
});