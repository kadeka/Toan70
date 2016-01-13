Template.productList.helpers({
    getProd:function(){
        var catId = Session.get("categoriesId");
        var items = products.find({cateId:catId},{sort: {createdAt: -1}});
        return items;
    },
    currentCate:function(){
        var catId = Session.get("categoriesId");
        return categories.findOne({_id:catId});
    },
    getImage:function(id){
        var img = images.findOne({_id:id});
        if(img){
            return img.copies.images.key;
        }else{
            return;
        }
    },
    getLocat:function(){
        var locatID = Session.get("LOCATIONID");
        return products.find({});
    }
});
Template.productDetail.helpers({
    getImage:function(id){
        var img = images.findOne({_id:id});
        if(img){
            return img.copies.images.key;
        }else{
            return;
        }
    },
    relatePro:function(){
        var catId = this.cateId;
        var id = this._id;
        return products.find({$and:[{cateId:catId}, {_id:{$ne:id}}]});
    }
});