$(document).ready(function(){

    // Let know PasswordBag extension is present
    $('meta[name=chrome-extension]').attr('content', 'yes');

    // Set event for Login button clicked
    $('body').on('click', '.passwordbag', function(e){

        // Get the credentials
        var credentials = $(e.currentTarget).data('credentials');


        // If Link not preset let it know
        if(credentials.url === undefined){
            noty({
                theme: 'relax',
                timeout: 2000,
                text: 'Insert a Link.',
                layout: 'topCenter',
                type: 'error'
            });
        }

        // If Username or Email not preset let it know
        if(credentials.userOrEmail === undefined){
            noty({
                theme: 'relax',
                timeout: 2000,
                text: 'Insert a Username or Email.',
                layout: 'topCenter',
                type: 'error'
            });
        }

        // If Password not preset let it know
        if(credentials.password === undefined){
            noty({
                theme: 'relax',
                timeout: 2000,
                text: 'Insert a Password.',
                layout: 'topCenter',
                type: 'error'
            });
        }

        // Set message for background to init the login
        if(credentials.url !== undefined &&
            credentials.userOrEmail !== undefined &&
            credentials.password !== undefined){
            chrome.runtime.sendMessage(credentials);
        }
    });
});