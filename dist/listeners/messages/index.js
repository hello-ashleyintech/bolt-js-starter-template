var sampleMessageCallback = require('./sample-message').sampleMessageCallback;
module.exports.register = function (app) {
    app.message(/^(hi|hello|hey).*/, sampleMessageCallback);
};
