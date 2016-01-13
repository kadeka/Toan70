Template.locations.events({
    'click #save': function (e){
        e.preventDefault();
        var name = $('#name').val();
        alert('This is my location'+ name);
        Meteor.call('addLocations',name);
        },
        'click #delete':function(){
        var id = this._id;
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call('deletelocate',id);
        }
    }
});
Template.locations.helpers({
    disLocation: function(){
        return locations.find();
    }
});
Template.updatelocate.events({
    'click #update': function (e){
        e.preventDefault();
        var id = this._id;
        var name = $('#name').val();
        alert('This is my location'+ name);
        Meteor.call('editlocation',id,name);
    }

});
