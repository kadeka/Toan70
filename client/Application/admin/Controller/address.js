Template.address.events({
    'click #save': function (e){
        e.preventDefault();
        var name = $('#name').val();
        var locatId = $('#locatId').val();
        alert('This is my location'+ name +'/'+ locatId);
        Meteor.call('addAddress',name,locatId);
        },
        'click #delete':function(){
        var id = this._id;
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call('deleteaddress',id);
        }
    }
});
Template.address.helpers({
    disLocation: function(){
        return locations.find();
    }
});
Template.address.helpers({
    disAdress: function(){
        return address.find();
    }
});
Template.updateaddress.events({
    'click #update': function (e){
        e.preventDefault();
        var id = this._id;
        var name = $('#name').val();
        alert('This is my address'+ name);
        Meteor.call('editaddress',id,name);
    }
});
