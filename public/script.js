$(document).ready(function() {
    // Initial signup
    // TODO: Make checks to see that fields are  valid (i.e. not empty)
    $("#signup").click(function() {
        var user = $("#username").val();
        var pass = $("#password").val(); // hash password later
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
        var pass = $("#password").val(); // hash password later
        $.ajax({
            url : 'http://localhost:3000/api/login/' + user + '/' + pass,
            type : 'DELETE',
            success : function(response) {
                document.write(response);
            }
        });
    });
    // Change username
    $("#updateUser").click(function() {
        var oldUser = $("#oldUser").val();
        var newUser = $("#newUser").val();
        var pass = $("#password").val(); // hash password later
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
        var oldPass = $("#oldPass").val(); // hash password later
        var newPass = $("#newPass").val(); // hash password later
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
});
