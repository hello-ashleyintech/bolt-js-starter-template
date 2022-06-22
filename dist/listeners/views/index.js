var sampleViewCallback = require('./sample-view').sampleViewCallback;
module.exports.register = function (app) {
    app.view('sample_view_id', sampleViewCallback);
};
