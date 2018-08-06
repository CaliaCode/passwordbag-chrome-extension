$(document).ready(function(){

    // RegExp for detect if is google 2 Steps Login
    var googlePathExp   = new RegExp("accounts.google.com");
    var currentPath     = location.href;

    if(googlePathExp.test(currentPath)){

        // Select form and email input
        var loginForm       = $('input[type=email]').closest('form');
        var emailField       = $('input[type=email]');

        // Do the first Step of the login
        if(emailField.val() == ''){

            // Fill the email
            emailField.val(credentials.userOrEmail);

            // Go to the next step
            $('input[id=next]').click();
        }

        // Do the second Step of the login
        setInterval(secondStep, 1500);

        function secondStep(){
            // Select Password field
            var passwordField = $('input[type=password]');

            if(passwordField.val() == ''){

                // Fill Password field
                passwordField.val(credentials.password);

                // Login
                $('input[id=signIn]').click();
            }
        }

    }else{

        // Select inputs o fill
        var loginForm = $('input[type=password]').closest('form');
        var userOrEmail = null;
        var passwordField = $('input[type=password]');

        // Set Username or Email field to fill
        if(loginForm.has('input[type=text]')){
            userOrEmail = loginForm.find('input[type=text]');
        }else if(loginForm.has('input[type=email]')){
            userOrEmail = loginForm.find('input[type=email]');
        }

        // Fill the inputs
        userOrEmail.val(credentials.userOrEmail);
        passwordField.val(credentials.password);

        // Login
        loginForm.submit();
    }
});