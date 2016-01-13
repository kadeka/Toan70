Meteor.methods({
	addProduct:function(name,desc,img,cate,location,address,price,qty,phone,email){
		var attr = {
			name : name,
			description : desc,
			imageId : img,
			cateId : cate,
			location : location,
			address : address,
			price : Number(price),
			quantity : Number(qty),
			phone : phone,
			email : email,
			status : 1,
			userId : Meteor.userId(),
			createdAt : new Date()
		}
		return products.insert(attr);
	},
	editProduct:function(id,name,desc,img,cate,location,address,price,qty,phone,email){
		var attr = {
			name : name,
			description : desc,
			imageId : img,
			cateId : cate,
			location : location,
			address : address,
			price : Number(price),
			quantity : Number(qty),
			phone : phone,
			email : email,
			status : 1,
			userId : Meteor.userId(),
			createdAt : new Date()
		}
		return products.update({_id:id},{$set:attr});
	},
	removePro:function(id){
		return products.remove({_id:id});
	}
});