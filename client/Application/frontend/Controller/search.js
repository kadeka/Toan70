Template.header.events({
    'keyup .text': function (){
        var txt = $('.text').val();
        if(txt) {
            Router.go('/search');
        } else {
            var mysearch = Session.get('mycurrent');
            console.log('MYSEARCH:'+mysearch);
            Router.go(mysearch);
        } 
    },
    'focus .text':function(){
        var currentpath = Iron.Location.get().path;
        Session.set('mycurrent',currentpath);
        //alert(currentpath);
    }
});
Template.searchBox.helpers({
    getproduct:function(){
        return products.find({});
    },
    getImage:function(image){
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        } 
    }
});