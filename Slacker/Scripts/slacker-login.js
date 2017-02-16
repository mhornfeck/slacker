$(function () {
    $('.js-username-input').focus();

    var setUsername = function (channelName) {
        $('.js-channel-name-hidden').val(channelName);
        $('.js-channel-label').text(channelName);
        $('.js-username-label').text('@' + $('.js-username-input').val());
        $('.js-login-container').toggleClass('hidden', true);
        $('.js-chat-container').toggleClass('hidden', false);
        $('.js-message-input').focus();
    }

    $('.js-channel').click(function (e) {
        var $target = $(e.currentTarget);
        setUsername($target.text());
    });
});