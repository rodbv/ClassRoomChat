define(['durandal/plugins/router', 'services/logger'], function (router, logger) {
    var chatInfo = ko.observable(),
        messages = ko.observableArray([{ name: 'daniel', message: 'primeira' }]),
        chatRoom = $.connection.chatroomhub;

    var init = function () {
        chatRoom.server.getChatInfo().done(function (data) {
            chatInfo(data);
            logger.log('Chat Initialized', null, 'Chat Init', true);
        });
    };

    var sendMessage = function () {
        chatRoom.server.send('teste', 'teste message');
    };

    var viewAttached = function () {
        logger.log('Chat Attached', null, 'Chat Attached', true);
    };

    function initClient() {
        chatRoom.client.broadcastMessage = function (name, message) {
            messages.push({ name: name, message: message });
        };
    };

    //#region Internal Methods
    function activate() {
        logger.log('ChatRoom View Activated', null, 'Chat Room', true);
        return Q.all([initClient(), $.connection.hub.start().done(init)]);
    }
    //#endregion 

    var vm = {
        chatInfo: chatInfo,
        messages: messages,
        sendMessage: sendMessage,
        activate: activate,
        viewAttached: viewAttached,
        title: 'Chat Room'
    };

    return vm;
});