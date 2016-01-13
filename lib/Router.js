Router.configure({
    layoutTemplate: 'MainLayout'
});
Router.route('/', {
    name: 'homes'
});
Router.route('/productList', {
    name: 'productList'
});
Router.route('/productDetail/:_id',{
    name:'productDetail',
     data:function(){
        return products.findOne({_id: this.params._id});
    }
});
// =========== Article =================
Router.route('/AddProduct', {
    name: 'AddProduct'
});
Router.route('/DisplayProduct', {
    name: 'disProduct'
});
Router.route('/UpdateProduct/:_id', {
    name: 'EditProduct',
    data:function(){
    	return products.findOne({_id: this.params._id});
    }
});



Router.route('/articledetail/:_id', {
    name: 'articledetail',
    data:function(){
        return article.findOne({_id: this.params._id});
    }
});
// ============== Categories ================
Router.route('/categories', {
    name: 'categories'
});
Router.route('/managecategories', {
    name: 'discategories'
});
Router.route('/updatecate/:_id',{
    name:'updatecate',
    data:function(){
        return categories.findOne({_id: this.params._id});
    }
});
// ================== user =====================
Router.route('/login', {
    name: 'login'
});
Router.route('/register', {
    name: 'register'
});
//=========== Search ============= //
Router.route('/search', {
    name: 'searchBox'
});
// =========== Mange User ============== //
Router.route('/manageuser', {
    name: 'manageuser'
});
Router.route('/edituser/:_id', {
    name: 'edituser',
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});

// =====================================
Router.route('/locations', {
    name: 'locations'
});
Router.route('/updatelocate/:_id',{
    name:'updatelocate',
    data:function(){
        return locations.findOne({_id: this.params._id});
    }
});
Router.route('/address', {
    name: 'address'
});
Router.route('/updateaddress/:_id',{
    name:'updateaddress',
    data:function(){
        return address.findOne({_id: this.params._id});
    }
});
// ============================ Member Product====================== //
Router.route('/addproducts',{
    name: 'addproducts'
});
Router.route('/Editproduct/:_id', {
    name: 'editproduct',
    data:function(){
        return products.findOne({_id: this.params._id});
    }
});
Router.route('/manageproducts', {
    name: 'manageproducts'
});