Template.checkout.helpers({
	checkoutDate: function () {
		return dateFormat(new Date(this.checkoutDate), "dddd, mmmm dS, yyyy, h:MM TT");
	},
	checkinDateTxt: function () {
		return dateFormat(new Date(this.checkinDate), "dddd, mmmm dS, yyyy, h:MM TT");
	},
	checkedinFlag: function(){
		if(this.checkinDate == 0) 
			return false;
		else
			return true;
	}
});