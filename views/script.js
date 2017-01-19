$(document).ready(function() {
     // Initial signup
     // TODO: Make checks to see that fields are valid (i.e. not empty)
     // TODO: Integrate HTTPS (TSL/SSL) so that request bodies are secure
     $("#signup").click(function() {
         var user = $("#username").val();
         var pass = $("#password").val();
         var data = {username: user, password: pass};
         if (user == null || pass == null) {
             return;
         } else {
             $.post('http://localhost:3000/api/login', data, function(response) {
                 document.write(response);
             });
         }
     });
     // Delete account
     $("#delete").click(function() {
         var user = $("#username").val();
         var pass = $("#password").val();
         var data = {username : user, password : pass};
         $.post('http://localhost:3000/api/login/delete', data, function(response) {
             document.write(response);
         });
     });
     // Change username
     $("#updateUser").click(function() {
         var oldUser = $("#oldUser").val();
         var newUser = $("#newUser").val();
         var pass = $("#password").val();
         var data = {oldUsername : oldUser, newUsername : newUser, password : pass};
         $.ajax({
             url : 'http://localhost:3000/api/login/user',
             type : 'PUT',
             data : data,
             success : function(response) {
                 document.write(response);
             },
             error : function(response) {
                 document.write(response);
             }
         });
     });
     // Change password
     $("#updatePass").click(function() {
         var user = $("#username").val();
         var oldPass = $("#oldPass").val();
         var newPass = $("#newPass").val();
         var data = {username : user, oldPassword : oldPass, newPassword : newPass};
         $.ajax({
             url : 'http://localhost:3000/api/login/pass',
             type : 'PUT',
             data : data,
             success : function(response) {
                 document.write(response);
             },
             error : function(response) {
                 document.write(response);
             }
         });
     });
     // Login
     $("#login").click(function() {
         var username = $("#username").val();
         var password = $("#password").val();
         var data = {username : username, password : password}
         $.post('http://localhost:3000/api/login/delete', data, function(response) {
             document.write(response);
         });
     });
     });
 });
