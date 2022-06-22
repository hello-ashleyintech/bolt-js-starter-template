var sampleShortcutCallback = require('./sample-shortcut').sampleShortcutCallback;
module.exports.register = function (app) {
    app.shortcut('sample_shortcut_id', sampleShortcutCallback);
};
