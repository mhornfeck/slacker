$(function () {
    $('.js-username-input').focus();

    var setUsername = function () {
        $('.js-username-label').text('@' + $('.js-username-input').val());
        $('.js-login-container').toggleClass('hidden', true);
        $('.js-chat-container').toggleClass('hidden', false);
        $('.js-message-input').focus();
    }

    $('.js-username-input').keydown(function (event) {
        // enter has keyCode = 13, change it if you want to use another button
        if (event.keyCode === 13) {
            setUsername();
        }
    });

    $('.js-btn-set-username').click(function () {
        setUsername();
    });
});