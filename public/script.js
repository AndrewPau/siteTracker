$(document).ready(function() {
    $("#submit").click(function() {
        var user = $("#username").val();
        var pass = $("#password").val(); // hash password later
        $.post('http://localhost:3000/api/login', {username: user, password: pass}, function(reponse) {
            console.log(response);
            document.write(response);
        });
        // $.ajax({
        //     method: "POST",
        //     url: 'http://localhost:3000/api/login',
        //     data: {username: user, password: pass},
        //     crossDomain: true,
        //     dataType: 'jsonp',
        //     success: function() { alert("Success"); },
        //     error: function() { alert('Failed!'); },
        // }).done(function(response) {
        //     console.log(response);
        //     document.write(response);
        // });
    });
});
