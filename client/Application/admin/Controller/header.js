Template.header.helpers({
	getLocatation:function(){
		return locations.find();
	},
	getCategories:function(){
		return categories.find();
	},
	getCategory:function(){
        var cateID = Session.get("categoryID");
        return products.find({cateId:cateID});
    }
});
Template.header.events({
	'change #listCate':function(e){
		e.preventDefault();
		var id = $('#listCate').val();
		Session.set("categoriesId",id);
		//alert(id);
		//Router.go("/productList");
		//Router.go("beauty");
	},
	'change #location':function(){
        var locatID = $('#location').val();
        //alert("locat: "+locatID);
        Session.set("locationID",locatID);
    }
    
	// ,
	// 'change #locat':function(){
	// 	var id = $('#locat').val();
	// 	alert("locat: ",id);
	// 	Session.set("LOCATIONID",id);
	// 	Router.go('/productList');
	// }
});