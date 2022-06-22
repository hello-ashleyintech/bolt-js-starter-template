var sampleActionCallback = require('./sample-action').sampleActionCallback;
module.exports.register = function (app) {
    app.action('sample_action_id', sampleActionCallback);
};
