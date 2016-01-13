Meteor.methods({
	addLocations:function(name){
		var attr = {
			name : name	
		}
		return locations.insert(attr);
	},
	editlocation: function(id,name){
        var attr = {
            name : name
        }
        return locations.update({_id:id},{$set:attr});
    },
    deletelocate: function(id){
        return locations.remove({_id:id});
    }

});
