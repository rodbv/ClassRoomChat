define(['durandal/plugins/router', 'services/logger'], function (router, logger) {
    var chatInfo = ko.observable(),
        messages = ko.observableArray(),
        chatRoom = $.connection.chatroomhub,
        chatUser = ko.observable({
            Owner: {
                Avatar: '/img/message_avatar2.png',
                UserName: 'Daniel de Oliveira',
                UserNick: '@daniel'
            }
        }),
        messageToSend = ko.observable();

    var init = function () {
        chatRoom.server.getChatInfo().done(function (data) {
            chatInfo(data);
            logger.log('Chat Initialized', null, 'Chat Init', true);
        });
    };

    var sendMessage = function () {
        if (messageToSend() === '' || messageToSend() === undefined)
            return;
        var message = { Time: '', Owner: chatUser().Owner, Body: messageToSend() };
        chatRoom.server.send(message).done(messageToSend(''));
    };

    var viewAttached = function () {
        logger.log('Chat Attached', null, 'Chat Attached', true);
    };

    function initClient() {
        chatRoom.client.broadcastMessage = function (message) {
            messages.push(message);
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
        messageToSend: messageToSend,
        chatUser: chatUser,
        sendMessage: sendMessage,
        activate: activate,
        viewAttached: viewAttached,
        title: 'Chat Room'
    };

    return vm;
});