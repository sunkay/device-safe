Template.checkout.helpers({
	checkoutDate: function () {
		return new Date(this.checkoutDate).toString();
	},
	checkinDateTxt: function () {
		return new Date(this.checkinDate).toString();
	},
	checkedinFlag: function(){
		if(this.checkinDate == 0) 
			return false;
		else
			return true;
	}

});