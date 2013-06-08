define(['durandal/system', 'durandal/plugins/router', 'services/logger'],
    function (system, router, logger) {
        //#region Internal Methods
        var routes = [
            {
                url: 'home',
                moduleId: 'viewmodels/home',
                name: 'Home',
                visible: true,
                caption: '<i class="icon-book"></i> Home'
            }, {
                url: 'chatroom',
                moduleId: 'viewmodels/chatroom',
                name: 'ChatRoom',
                visible: true,
                caption: '<i class="icon-book"></i> Home'
            }];

        var shell = {
            activate: activate,
            router: router
        };

        return shell;

        function activate() {
            return boot();
        }

        function boot() {
            router.map(routes);
            log('Hot Towel SPA Loaded!', null, true);
            return router.activate('chatroom');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });