var sampleCommandCallback = require('./sample-command').sampleCommandCallback;
module.exports.register = function (app) {
    app.command('/sample-command', sampleCommandCallback);
};
