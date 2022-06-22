var appHomeOpenedCallback = require('./app-home-opened').appHomeOpenedCallback;
module.exports.register = function (app) {
    app.event('app_home_opened', appHomeOpenedCallback);
};
