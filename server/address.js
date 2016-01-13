Meteor.methods({
	addAddress:function(name,locatId){
		var attr = {
			name : name,
			locatId : locatId	
		}
		return address.insert(attr);
	},
	editaddress: function(id,name){
        var attr = {
            name : name
        }
        return address.update({_id:id},{$set:attr});
    },
    deleteaddress: function(id){
        return address.remove({_id:id});
    }

});
