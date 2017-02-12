$(function () {
    // Reference the auto-generated proxy for the hub
    var chat = $.connection.chatHub;

    // Create a function that the hub can call back to display messages
    chat.client.receiveMessage = function (name, message) {
        $('.js-discussion-list').append('<li><strong>' + name + '</strong>: ' + message + '</li>');
    };

    // Create a function to handle sending messages to the hub
    var sendChatMessage = function() {
        chat.server.sendMessage('@' + $('.js-username-input').val(), $('.js-message-input').val());
        $('.js-message-input').val('').focus();
    };

    // Start the connection
    $.connection.hub.start().done(function () {
        $('.js-btn-send').click(function () {
            sendChatMessage();
        });

        $('.js-message-input').keydown(function (event) {
            if (event.keyCode === 13) {
                sendChatMessage();
            }
        });
    });
});