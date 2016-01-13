Template.login.events({
    'click #btnRegister': function(e){
        e.preventDefault();
        var username = $('#username').val();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var password = $('#password').val();
         Meteor.call('registerUser',username,fname,lname,email,password);
    }
});
Template.login.events({
    'click #login': function(event){
        event.preventDefault();
        var email = $('#uname').val();
        var password = $('#password').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
                Session.set("loginError",error.reason);
                $("#loginError").text("Error in your login!");
            } else {
                 Session.set("loginError","");
                 var loggedInUser = Meteor.user();
                 var group = 'mygroup';
                 if (Roles.userIsInRole(loggedInUser, ['Admin'], group)) {
                    Router.go('/AddProduct');
                    $('.close').click();
                 }
                 else if (Roles.userIsInRole(loggedInUser, ['member'], group)) {    

                        Router.go('/');
                        $('.close').click();
                 }
                 else{

                     Router.go('/');
                     $('.close').click();
                 }
            }
        }); 
    }
});
Template.header.events({
    'click #logout': function(event){
        event.preventDefault();
        //alert('logout!!!');
        Meteor.logout();
        Router.go('/login');
    },
    'click #login': function(event){
        event.preventDefault();
        Router.go('/');
    }
});
// ================ Manage User =================== //
Session.set("count",0);
Template.manageuser.events({
    "click #remove":function(e){
        e.preventDefault();
        var id = this._id;
        //alert('Remove Project!!!'+id);
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call("deleteUser",id);
        }
    },
    'click #adduser': function(e){
        e.preventDefault();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var mySelect = $('#mySelect').val();
        //alert(username+email+password+mySelect);
        Meteor.call('addUser',username,email,password,mySelect);
        //Router.go('project');
    }
});
Template.manageuser.helpers({
    getroles:function(){
        return Meteor.roles.find({});
    },
    listuser:function(){
        var a = Session.get("count");
        a++;
        var allUser = Meteor.users.find({});
        return allUser;
    },

});
//==================== Update User =======================
Template.edituser.events({
   'click #edituser': function(e){
        e.preventDefault();
        var id = this._id;
        var username = $('#username').val();
        var email = $('#email').val();
        // var password = $('#password').val();
        var mySelect = $('#mySelect').val();
        Meteor.call('edituser',id,username,email);
        Meteor.call('updateroles',id,mySelect);
        Router.go('/manageuser');
    }
});
Template.edituser.helpers({
     position: function(posit){
      return posit[0];
     },
     displayuser:function(){
        return Meteor.roles.find({});
     }
});