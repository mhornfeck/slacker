$(function () {
    // Reference the auto-generated proxy for the hub
    var chat = $.connection.chatHub;

    // Create a function that the hub can call back to display messages
    chat.client.receiveMessage = function (name, message) {
        $('.js-discussion-list').append('<li><strong>' + name + '</strong>: ' + message + '</li>');
    };

    chat.client.userJoinedChannel = function (userName) {
        $('.js-discussion-list').append('<li><strong>' + userName + '</strong> joined the party.</li>');
    };

    chat.client.userLeftChannel = function (userName) {
        $('.js-discussion-list').append('<li><strong>' + userName + '</strong> left the party.</li>');
    };

    // Create a function to handle sending messages to the hub
    var sendChatMessage = function() {
        chat.server.sendMessage('@' + $('.js-username-input').val(), $('.js-message-input').val());
        $('.js-message-input').val('').focus();
    };

    var joinChannel = function () {
        chat.server.joinChannel('@' + $('.js-username-input').val(), $('.js-channel-name-hidden').val());
    };

    var leaveChannel = function () {
        chat.server.leaveChannel('@' + $('.js-username-input').val(), $('.js-channel-name-hidden').val());
    };

    // Start the connection
    $.connection.hub.start().done(function () {
        $('.js-channel').click(function () {
            if ($('.js-username-input').val()) {
                joinChannel();
            }
        });

        $('.js-btn-send').click(function () {
            sendChatMessage();
        });

        $('.js-leave-channel').click(function () {
            $('.js-discussion-list').html('');
            leaveChannel();
        });

        $('.js-message-input').keydown(function (event) {
            if (event.keyCode === 13) {
                sendChatMessage();
            }
        });
    });
});