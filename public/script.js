$(document).ready(function() {
    // Initial signup
    $("#signup").click(function() {
        var user = $("#username").val();
        var pass = $("#password").val(); // hash password later
        var data = {username: user, password: pass};
        $.post('http://localhost:3000/api/login', data, function(response) {
            document.write(response);
        });
    });
    // Delete account
    $("#delete").click(function() {
        var user = $("#username").val();
        var pass = $("#password").val(); // hash password later
        $.ajax({
            url : 'http://localhost:3000/api/login/' + user,
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
            dataType : 'json',
            success : function(response) {
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
            dataType : 'json',
            success : function(response) {
                document.write(response);
            }
        });
    });
});
