define(['services/logger'], function (logger) {
    var chatInfo = ko.observable();

    var init = function () {
        return $.connection.hub.start().done(function () {
            var chatRoom = $.connection.chatroomhub;
            chatRoom.server.getChatInfo().done(function (data) {
                chatInfo(data);
                logger.log('Chat Initialized', null, 'Chat Init', true);
            });
        });
    };

    var viewAttached = function () {
        logger.log('Chat Attached', null, 'Chat Attached', true);
    };

    //#region Internal Methods
    function activate() {
        logger.log('ChatRoom View Activated', null, 'Chat Room', true);
        return Q.all([init()]);
    }
    //#endregion 

    var vm = {
        chatInfo: chatInfo,
        activate: activate,
        viewAttached: viewAttached,
        title: 'Chat Room'
    };

    return vm;
});