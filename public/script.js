$(document).ready(function() {
    $("#submit").click(function() {
        var user = $("#username").val();
        var pass = $("#password").val(); // hash password later
        $.post('http://localhost:3000/api/login', {username: user, password: pass}, function(response) {
            console.log(response);
            document.write(response);
        });
    });
});
