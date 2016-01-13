Template.addproducts.events({
    'click #btn-save':function(e){
        e.preventDefault();
        var name = $('#name').val();
        var desc = $('#desc').val();
        var img = Session.get('ADDIMAGEID');
        var cate = $('#cate').val();
        var location = $('#location').val();
        var address = $('#address').val();
        var price = $('#price').val();
        var qty = $('#qty').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        Meteor.call('addproducts',name,desc,img,cate,location,address,price,qty,phone,email);
        Router.go('/manageproducts');
    },
    'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            images.insert(files[i], function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                Session.set('ADDIMAGEID', fileObj._id);
            });
        }
    },
    'change #local':function(){
        var locatID = $('#local').val();
        alert("locat somaly: "+locatID);
        Session.set("locationID",locatID);
    }
});
Template.addproducts.helpers({
    getCategory:function(){
        return categories.find();
    },
    getLocat:function(){
        return locations.find();
    },
    getAdd:function(){
        var locatID = Session.get("locationID");
        return address.find({locatId:locatID});
    }
});
Template.manageproducts.helpers({
    dispro:function(){
        var userId = Meteor.userId();
        return products.find({userId:userId});
    },
    getImage:function(id){
        var img = images.findOne({_id:id});
        if(img){
            //console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    },
    getCat:function(){
        var catID = this.cateId;
        return categories.find({_id:catID});
    }
});
Template.manageproducts.events({
    'click #remove-prod':function(){
        var id = this._id;
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call('removePro',id);
        }    
    }
});
Template.editproduct.events({
    'click #btn-update':function(e){
        e.preventDefault();
        var id = this._id;
        var name = $('#name').val();
        var desc = $('#desc').val();
        var img = Session.get('ADDIMAGEID');
        var cate = $('#cate').val();
        var location = $('#location').val();
        var address = $('#address').val();
        var price = $('#price').val();
        var qty = $('#qty').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var currentImage = $('#currentImage').val();
        if(typeof img == "undefined"){
            img = currentImage;
        }
        Meteor.call('editProd',id,name,desc,img,cate,location,address,price,qty,phone,email,function(error,result){
            if(error){}
            else{
                Session.set('ADDIMAGEID',undefined);
                Router.go('/manageproducts');
            }

        });
    },
    'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            images.insert(files[i], function (err, fileObj) {
                Session.set('ADDIMAGEID', fileObj._id);
            });
        }
    }
});
Template.editproduct.helpers({
    getcatname:function(){
        return categories.find({});
    },
    currentcat:function(){
        var id = this.cateId;
        return categories.find({_id:id});
    },
    getLocat:function(){
        return locations.find();
    },
    currentLocat:function(){
        var id = this._id;
        return locations.find({_id:id});
    },
    getAdd:function(){
        var locatID = Session.get("locationID");
        return address.find({locatId:locatID});
    },
    currentAdd:function(){
        var id = this._id;
        var locatID = Session.get("locationID");
        return address.find({});
    }
});